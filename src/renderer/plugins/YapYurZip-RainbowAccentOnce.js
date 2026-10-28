(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "RainbowAccentOnce",
      description: "Slowly cycles accent color (local).",
      authors: ['YapYur'],
      tags: ["Fun"],
      options: {},
      start(ctx) {
  
        let h = 0;
        const id = setInterval(() => {
          h = (h + 2) % 360;
          document.documentElement.style.setProperty('--accent', 'hsl(' + h + ' 80% 60%)');
          document.documentElement.style.setProperty('--accent-soft', 'hsl(' + h + ' 80% 60% / 0.2)');
        }, 120);
        ctx.cleanup(() => {
          clearInterval(id);
          document.documentElement.style.removeProperty('--accent');
          document.documentElement.style.removeProperty('--accent-soft');
        });
  
      },
    });
})();
