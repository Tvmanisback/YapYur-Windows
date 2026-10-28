(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SmoothChannelSwitch",
      description: "Brief fade on message list.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("@media (prefers-reduced-motion:no-preference){.messages,.msg-list{animation:yyFade .12s ease}@keyframes yyFade{from{opacity:.6}}}");
      },
    });
})();
