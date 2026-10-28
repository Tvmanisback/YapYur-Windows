(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "StickyInputBar",
      description: "Sticky composer.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".composer{position:sticky;bottom:0;z-index:6;background:var(--bg-main)}");
      },
    });
})();
