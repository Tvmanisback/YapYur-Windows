(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AccentScroll",
      description: "Accent scrollbars.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("*{scrollbar-width:thin;scrollbar-color:var(--accent) transparent}*::-webkit-scrollbar{width:8px}*::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--accent) 55%,#000);border-radius:8px}");
      },
    });
})();
