(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "NoOutlineMouse",
      description: "No outline unless focus-visible.",
      authors: ['YapYur'],
      tags: ["Accessibility"],
      options: {},
      start(ctx) {
        ctx.css(":focus:not(:focus-visible){outline:none!important}");
      },
    });
})();
