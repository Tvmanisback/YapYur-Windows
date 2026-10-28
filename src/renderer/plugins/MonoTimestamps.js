(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MonoTimestamps",
      description: "Monospace timestamps.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg-time,time,.timestamp{font-family:ui-monospace,Menlo,monospace;font-size:11px}");
      },
    });
})();
