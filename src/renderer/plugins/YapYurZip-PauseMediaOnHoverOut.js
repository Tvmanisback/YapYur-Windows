(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "PauseMediaOnHoverOut",
      description: "Videos pause when the pointer leaves them.",
      authors: ['YapYur'],
      tags: ["Performance"],
      options: {},
      start(ctx) {
  
        ctx.watch('.msg video, .embed video', (vid) => {
          vid.autoplay = false;
          vid.addEventListener('mouseenter', () => vid.play().catch(() => {}));
          vid.addEventListener('mouseleave', () => vid.pause());
        });
  
      },
    });
})();
