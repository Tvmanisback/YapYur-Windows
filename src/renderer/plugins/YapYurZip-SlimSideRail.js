(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SlimSideRail",
      description: "Tighter sidebar rows.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".side .chat-row,.side .nav-item{padding:4px 8px!important;font-size:13px}");
      },
    });
})();
