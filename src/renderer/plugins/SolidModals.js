(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SolidModals",
      description: "Opaque modals.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".modal{background:var(--bg-elev)!important;backdrop-filter:none!important}");
      },
    });
})();
