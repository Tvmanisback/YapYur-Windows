(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "LargeChatAvatars",
      description: "Larger chat avatars.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".msg .avatar,.msg img.avatar{width:44px!important;height:44px!important;border-radius:50%}");
      },
    });
})();
