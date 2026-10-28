(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SquareAvatars",
      description: "Squircle avatars.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".avatar,img.avatar{border-radius:10px!important}");
      },
    });
})();
