'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { _electron: electron } = require('playwright');

async function main() {
  const outputDir = path.join(process.cwd(), 'YapYur-Release', 'ui screen shots');
  const outputFile = path.join(outputDir, 'YapYur.png');
  fs.mkdirSync(outputDir, { recursive: true });

  let app;
  try {
    app = await electron.launch({
      executablePath: require('electron'),
      args: ['.', '--disable-gpu', '--no-sandbox'],
      cwd: process.cwd(),
      timeout: 60000,
    });

    const page = await app.firstWindow();
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(12000);
    await page.screenshot({ path: outputFile, fullPage: false });
    console.log('Saved UI screenshot:', outputFile);
  } finally {
    if (app) await app.close().catch(() => {});
  }
}

main().catch((error) => {
  console.error('Could not capture YapYur UI screenshot:', error);
  process.exitCode = 1;
});
