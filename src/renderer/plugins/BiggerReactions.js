(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "BiggerReactions",
      description: "Larger reactions.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".reaction,.msg-react,.react-btn{transform:scale(1.08)}");
      },
    });
})();
