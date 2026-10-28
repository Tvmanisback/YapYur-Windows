(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "RoleNameShimmer",
      description: "Shimmer on colored names.",
      authors: ['YapYur'],
      tags: ["Fun", "Appearance"],
      options: {},
      start(ctx) {
        ctx.css("@keyframes yySh{to{background-position:200% center}}.msg-author[style*=\"color\"]{background:linear-gradient(90deg,var(--accent),#f472b6,#38bdf8,var(--accent));background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent!important;animation:yySh 7s linear infinite}");
      },
    });
})();
