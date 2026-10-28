(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MessageSepLine",
      description: "Hairline under message groups.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg:not(.grouped){border-top:1px solid color-mix(in srgb,var(--border) 70%,transparent)}");
      },
    });
})();
