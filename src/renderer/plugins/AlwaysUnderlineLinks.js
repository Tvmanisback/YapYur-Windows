(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AlwaysUnderlineLinks",
      description: "Underline chat links.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-text a{text-decoration:underline;text-underline-offset:2px}");
      },
    });
})();
