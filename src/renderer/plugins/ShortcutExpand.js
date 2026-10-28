(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ShortcutExpand",
      description: "Expands text shortcuts on Enter.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {"rules": {"type": "string", "default": "shrug=\u00af\\_(\u30c4)_/\u00af\ntableflip=(\u256f\u00b0\u25a1\u00b0)\u256f\ufe35 \u253b\u2501\u253b\nlenny=( \u0361\u00b0 \u035c\u0296 \u0361\u00b0)", "description": "find=replace per line"}},
      start(ctx) {
  
        const parse = () => String(ctx.settings.store.rules || '').split('\n').map((l) => {
          const i = l.indexOf('='); if (i < 1) return null; return { find: l.slice(0, i), replace: l.slice(i + 1) };
        }).filter(Boolean);
        const onKey = (e) => {
          if (e.key !== 'Enter' || e.shiftKey) return;
          const ta = e.target;
          if (!(ta instanceof HTMLTextAreaElement)) return;
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          let v = ta.value; let changed = false;
          for (const r of parse()) if (r.find && v.includes(r.find)) { v = v.split(r.find).join(r.replace); changed = true; }
          if (!changed) return;
          Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(ta, v);
          ta.dispatchEvent(new Event('input', { bubbles: true }));
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
