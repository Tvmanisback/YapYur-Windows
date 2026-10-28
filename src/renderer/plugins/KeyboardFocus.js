(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "KeyboardFocus",
      description: "Strong focus-visible outline.",
      authors: ['YapYur'],
      tags: ["Accessibility"],
      options: {},
      start(ctx) {
        ctx.css(":focus-visible{outline:2px solid var(--accent)!important;outline-offset:2px}");
      },
    });
})();
