(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "OnlineOnlyPulse",
      description: "Pulse online dots.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("@keyframes yyOn{50%{transform:scale(1.25);opacity:.7}}.status-dot.online{animation:yyOn 2s ease-in-out infinite}");
      },
    });
})();
