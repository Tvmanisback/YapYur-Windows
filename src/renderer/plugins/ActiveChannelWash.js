(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ActiveChannelWash",
      description: "Accent wash on active channel.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".chat-row.active,.nav-item.active{background:var(--accent-soft)!important}");
      },
    });
})();
