(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "BrightAccentText",
      description: "Brighter link color.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-text a{color:color-mix(in srgb,var(--accent) 80%,#fff)!important}");
      },
    });
})();
