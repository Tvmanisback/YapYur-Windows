(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "FrostPanels",
      description: "Frosted modals/menus.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".modal,.ctx-menu,.emoji-picker,.settings{backdrop-filter:blur(12px) saturate(1.15);background:color-mix(in srgb,var(--bg-elev) 80%,transparent)!important}");
      },
    });
})();
