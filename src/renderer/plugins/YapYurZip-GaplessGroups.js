(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "GaplessGroups",
      description: "Less padding in grouped msgs.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg.grouped{padding-top:0!important;padding-bottom:0!important}");
      },
    });
})();
