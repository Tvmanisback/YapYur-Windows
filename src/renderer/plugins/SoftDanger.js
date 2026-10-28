(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SoftDanger",
      description: "Softer danger buttons.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".danger,.btn-danger{background:color-mix(in srgb,var(--danger) 85%,#000)!important}");
      },
    });
})();
