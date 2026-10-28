(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "PressyButtons",
      description: "Press scale on buttons.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".icon-btn,.btn,.send-btn{transition:transform .12s}.icon-btn:active,.btn:active,.send-btn:active{transform:scale(.93)}");
      },
    });
})();
