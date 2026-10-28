(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "LowerSidebarContrast",
      description: "Quieter sidebar text.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".side,.sidebar{color:var(--text-muted)}");
      },
    });
})();
