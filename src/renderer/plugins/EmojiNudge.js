(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "EmojiNudge",
      description: "Larger inline emoji.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-text img.emoji,.msg .emoji{width:1.35em!important;height:1.35em!important}");
      },
    });
})();
