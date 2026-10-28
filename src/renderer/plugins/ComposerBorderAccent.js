(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ComposerBorderAccent",
      description: "Accent border when composer focused.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".composer:focus-within,.composer-box:focus-within{box-shadow:inset 0 0 0 1px var(--accent)}");
      },
    });
})();
