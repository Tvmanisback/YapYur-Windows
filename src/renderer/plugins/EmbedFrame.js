(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "EmbedFrame",
      description: "Framed embeds.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".embed,.msg-embed{border:1px solid var(--border);border-radius:10px;overflow:hidden}");
      },
    });
})();
