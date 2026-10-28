(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ReplyBarAccent",
      description: "Accent reply bar.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-reply,.reply-bar{border-left:3px solid var(--accent)!important;padding-left:8px}");
      },
    });
})();
