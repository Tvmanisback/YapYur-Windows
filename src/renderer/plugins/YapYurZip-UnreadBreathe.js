(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "UnreadBreathe",
      description: "Pulse unread badges.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("@keyframes yyUb{50%{opacity:.5;transform:scale(.92)}}.unread-badge,.badge-unread,.rail-badge{animation:yyUb 1.7s ease-in-out infinite}");
      },
    });
})();
