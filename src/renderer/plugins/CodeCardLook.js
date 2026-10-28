(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "CodeCardLook",
      description: "Card-like code blocks.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg pre,code{background:color-mix(in srgb,var(--bg-elev) 90%,#000)!important;border-radius:8px;border:1px solid var(--border)}");
      },
    });
})();
