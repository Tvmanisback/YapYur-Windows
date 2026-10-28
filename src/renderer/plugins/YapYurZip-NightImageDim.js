(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "NightImageDim",
      description: "Dim images at night.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg img,.embed-image{filter:brightness(.9) contrast(1.02)}");
      },
    });
})();
