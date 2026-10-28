(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "FlatButtons",
      description: "Flat bordered buttons.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".btn,.icon-btn{box-shadow:none!important;border:1px solid var(--border)}");
      },
    });
})();
