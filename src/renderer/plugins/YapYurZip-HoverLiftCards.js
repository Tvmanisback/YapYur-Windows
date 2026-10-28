(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "HoverLiftCards",
      description: "Lift settings cards on hover.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".yyx-card,.yyx-theme-card{transition:transform .12s}.yyx-card:hover,.yyx-theme-card:hover{transform:translateY(-1px)}");
      },
    });
})();
