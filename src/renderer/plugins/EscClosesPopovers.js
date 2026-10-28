(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "EscClosesPopovers",
      description: "Escape clicks a visible close/backdrop.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const onKey = (e) => {
          if (e.key !== 'Escape') return;
          const close = document.querySelector('.modal button[aria-label*="close" i], .overlay, .backdrop');
          if (close) close.click();
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
