'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const input = process.argv[2] || path.join(root, 'yapyur-extension-source', 'content.js');
const pluginDir = path.join(root, 'src', 'renderer', 'plugins');
const prefix = 'YapYurZip-';

if (!fs.existsSync(input)) {
  throw new Error('Missing YapYur ZIP content.js: ' + input);
}
const source = fs.readFileSync(input, 'utf8');
fs.mkdirSync(pluginDir, { recursive: true });

function extractDefinition(text, start) {
  const open = text.indexOf('{', start);
  if (open < 0) return null;
  let depth = 0;
  let state = 'code';
  let quote = '';
  let escaped = false;
  for (let i = open; i < text.length; i++) {
    const c = text[i];
    const n = text[i + 1] || '';
    if (state === 'code') {
      if (c === '/' && n === '/') { state = 'line'; i++; continue; }
      if (c === '/' && n === '*') { state = 'block'; i++; continue; }
      if (c === "'" || c === '"' || c === '\`') { state = 'string'; quote = c; escaped = false; continue; }
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) {
          let end = i + 1;
          while (end < text.length && /\s/.test(text[end])) end++;
          if (text.slice(end, end + 2) !== ');') return null;
          return text.slice(start, end + 2);
        }
      }
    } else if (state === 'line') {
      if (c === '\n') state = 'code';
    } else if (state === 'block') {
      if (c === '*' && n === '/') { state = 'code'; i++; }
    } else {
      if (escaped) escaped = false;
      else if (c === '\\') escaped = true;
      else if (c === quote) state = 'code';
    }
  }
  return null;
}

function pluginName(definition) {
  const m = definition.match(/\bname\s*:\s*(['"])([^'"]+)\1/);
  return m ? m[2] : null;
}

function existingPluginNames() {
  const names = new Set();
  for (const file of fs.readdirSync(pluginDir).filter((f) => f.endsWith('.js') && !f.startsWith(prefix))) {
    const text = fs.readFileSync(path.join(pluginDir, file), 'utf8');
    const defs = [...text.matchAll(/YM\.definePlugin\s*\(\s*\{/g)];
    for (const match of defs) {
      const definition = extractDefinition(text, match.index);
      const name = definition && pluginName(definition);
      if (name) names.add(name);
    }
  }
  return names;
}

const alreadyProvided = existingPluginNames();
const matches = [...source.matchAll(/YM\.definePlugin\s*\(\s*\{/g)];
const written = [];
const skipped = [];
for (const match of matches) {
  const definition = extractDefinition(source, match.index);
  if (!definition) throw new Error('Could not parse a plugin definition at offset ' + match.index);
  const name = pluginName(definition);
  if (!name) throw new Error('Found a plugin definition without a name at offset ' + match.index);
  if (alreadyProvided.has(name)) {
    skipped.push(name);
    continue;
  }

  const adapted = definition
    .replace(/yy-/g, 'yyx-')
    .replace(/ym-/g, 'yyx-')
    .replace(/ctx\.onStop\s*\(/g, 'ctx.cleanup(');
  const fileName = prefix + name.replace(/[^A-Za-z0-9_-]/g, '') + '.js';
  const fileContent = [
    '(function () {',
    '  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.',
    '  const dom = YM.dom;',
    '  const util = YM.util;',
    '  ' + adapted.replace(/\n/g, '\n  '),
    '})();',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(pluginDir, fileName), fileContent, 'utf8');
  written.push({ name, fileName });
}

console.log('Imported ' + written.length + ' standalone plugin files.');
console.log('Skipped ' + skipped.length + ' plugins already provided by the desktop source: ' + skipped.join(', '));
for (const item of written) console.log(item.fileName + ' (' + item.name + ')');
