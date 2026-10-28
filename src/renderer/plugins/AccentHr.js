(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AccentHr",
      description: "Accent horizontal rules.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-text hr{border:0;border-top:2px solid var(--accent);opacity:.5}");
      },
    });
})();
