(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SidebarStickyHeader",
      description: "Sticky sidebar categories.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".side .category,.sidebar .category{position:sticky;top:0;z-index:2;background:var(--bg-side)}");
      },
    });
})();
