(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ActiveServerRing",
      description: "Glow on active server icon.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".rail-item.active{box-shadow:0 0 0 2px var(--accent),0 0 10px color-mix(in srgb,var(--accent) 35%,transparent)}");
      },
    });
})();
