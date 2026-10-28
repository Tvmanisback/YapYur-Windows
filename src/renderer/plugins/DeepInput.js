(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "DeepInput",
      description: "Deeper input backgrounds.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css("input,textarea,.composer textarea{background:color-mix(in srgb,var(--bg-input) 90%,#000)!important}");
      },
    });
})();
