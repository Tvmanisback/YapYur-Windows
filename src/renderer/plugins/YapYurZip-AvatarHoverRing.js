(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AvatarHoverRing",
      description: "Accent ring on avatar hover.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".avatar{transition:box-shadow .15s,transform .15s}.avatar:hover{transform:scale(1.04);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 40%,transparent)}");
      },
    });
})();
