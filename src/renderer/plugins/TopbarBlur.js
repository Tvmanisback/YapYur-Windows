(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "TopbarBlur",
      description: "Blurred top bar.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".topbar,.titlebar{backdrop-filter:blur(10px);background:color-mix(in srgb,var(--bg-main) 75%,transparent)!important}");
      },
    });
})();
