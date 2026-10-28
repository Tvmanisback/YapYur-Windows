(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SendBtnPill",
      description: "Pill send button.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".send-btn{border-radius:999px!important;padding-left:14px!important;padding-right:14px!important}");
      },
    });
})();
