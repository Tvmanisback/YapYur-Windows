(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "HideSelfAvatar",
      description: "Hides your avatar on your own messages.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
  
        ctx.cleanup(YM.messages.decorate(({ el, message }) => {
          const me = YM.Store.myId && YM.Store.myId();
          if (!me || !message || (message.author_id || message.authorId) !== me) return;
          const av = el.querySelector('.avatar, img.avatar');
          if (av) av.style.visibility = 'hidden';
        }));
  
      },
    });
})();
