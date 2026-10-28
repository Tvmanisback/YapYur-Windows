(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MessageAgeTint",
      description: "Slightly fade grouped messages.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg.grouped{opacity:.92}");
      },
    });
})();
