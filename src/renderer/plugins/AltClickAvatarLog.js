(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "AltClickAvatarLog",
      description: "Alt-click avatar logs message id to console.",
      authors: ['YapYur'],
      tags: ["Developer"],
      options: {},
      start(ctx) {
  
        const onClick = (e) => {
          if (!e.altKey) return;
          const av = e.target.closest && e.target.closest('.avatar, img.avatar');
          if (!av) return;
          const row = av.closest(YM.messages.selector);
          if (row) console.log('%c[YapYur]', 'color:#7c3fff', 'message', row.getAttribute('data-message-id'));
        };
        document.addEventListener('click', onClick, true);
        ctx.cleanup(() => document.removeEventListener('click', onClick, true));
  
      },
    });
})();
