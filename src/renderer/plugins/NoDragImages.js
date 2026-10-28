(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "NoDragImages",
      description: "Disable drag on chat images.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
        ctx.css('.msg img,.embed-image{-webkit-user-drag:none;user-select:none}');
      },
    });
})();
