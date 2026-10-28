(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "FocusRingPulse",
      description: "Pulse when focusing composer.",
      authors: ['YapYur'],
      tags: ["Accessibility"],
      options: {},
      start(ctx) {
        ctx.css("@keyframes yyFr{0%{box-shadow:0 0 0 0 var(--accent)}100%{box-shadow:0 0 0 6px transparent}}.composer textarea:focus{animation:yyFr .6s ease}");
      },
    });
})();
