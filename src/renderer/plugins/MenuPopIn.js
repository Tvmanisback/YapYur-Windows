(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MenuPopIn",
      description: "Pop-in animation for menus.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("@media (prefers-reduced-motion:no-preference){.ctx-menu,.modal,.emoji-picker{animation:yyPop .15s ease}@keyframes yyPop{from{opacity:0;transform:translateY(6px) scale(.98)}}");
      },
    });
})();
