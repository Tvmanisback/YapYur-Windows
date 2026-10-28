'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { _electron: electron } = require('playwright');

async function main() {
  const root = process.cwd();
  const installerDir = path.join(root, 'dist', 'installer-stage');
  const outputDir = path.join(root, 'YapYur-Release', 'ui screen shots');
  const outputFile = path.join(outputDir, 'YapYur.png');

  if (!fs.existsSync(path.join(installerDir, 'main.js')) || !fs.existsSync(path.join(installerDir, 'index.html'))) {
    throw new Error('Installer staging files are missing. Run npm run dist:installer -- --stage-only first.');
  }

  fs.mkdirSync(outputDir, { recursive: true });

  let app;
  try {
    app = await electron.launch({
      executablePath: require('electron'),
      args: ['.'],
      cwd: installerDir,
      timeout: 60000,
    });

    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(() => {});
    await page.waitForSelector('h1', { timeout: 15000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: outputFile, fullPage: false });
    console.log('Saved installer UI screenshot:', outputFile);
  } finally {
    if (app) await app.close().catch(() => {});
  }
}

main().catch((error) => {
  console.error('Could not capture installer UI screenshot:', error);
  process.exitCode = 1;
});
