(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AttachChip",
      description: "Accent outline on attach control.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("button[aria-label*=\"attach\" i],button[title*=\"upload\" i],.attach-btn{box-shadow:0 0 0 1px var(--accent)}");
      },
    });
})();
