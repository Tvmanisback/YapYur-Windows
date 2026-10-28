(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "EmbedShadow",
      description: "Shadow under embeds.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".embed,.msg-embed{box-shadow:0 4px 16px #0004}");
      },
    });
})();
