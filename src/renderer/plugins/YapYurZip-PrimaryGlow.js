(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "PrimaryGlow",
      description: "Glow under primary/send buttons.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".btn-primary,.send-btn,button[type=submit]{box-shadow:0 0 12px color-mix(in srgb,var(--accent) 42%,transparent)}");
      },
    });
})();
