(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "DimInactiveServers",
      description: "Dim inactive server icons.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".rail-item:not(.active){opacity:.55}.rail-item:not(.active):hover{opacity:1}");
      },
    });
})();
