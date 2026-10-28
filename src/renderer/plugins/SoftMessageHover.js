(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SoftMessageHover",
      description: "Soft message hover.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg:hover{background:color-mix(in srgb,var(--bg-hover) 60%,transparent)!important}");
      },
    });
})();
