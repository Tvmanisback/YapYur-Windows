(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AccentTextCaret",
      description: "Accent caret in composer.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".composer textarea,textarea{caret-color:var(--accent)}");
      },
    });
})();
