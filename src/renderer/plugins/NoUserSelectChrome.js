(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "NoUserSelectChrome",
      description: "Select message text only.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".rail,.side,.topbar{user-select:none}.msg-text{user-select:text}");
      },
    });
})();
