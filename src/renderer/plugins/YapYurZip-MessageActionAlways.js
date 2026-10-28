(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MessageActionAlways",
      description: "Actions always slightly visible.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg .msg-actions{opacity:.35}.msg:hover .msg-actions{opacity:1}");
      },
    });
})();
