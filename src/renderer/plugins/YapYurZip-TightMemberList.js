(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "TightMemberList",
      description: "Dense member rows.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".people-row,.member-row,.member{padding-top:2px!important;padding-bottom:2px!important}");
      },
    });
})();
