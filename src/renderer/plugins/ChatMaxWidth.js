(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ChatMaxWidth",
      description: "Cap chat width on ultrawide.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".messages,.msg-list{max-width:860px;margin-left:auto;margin-right:auto}");
      },
    });
})();
