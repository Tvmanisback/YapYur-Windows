(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ServerTopOnDoubleClick",
      description: "Double-click rail to scroll channel list to top.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const onDbl = (e) => {
          if (!(e.target.closest && e.target.closest('.rail, .rail-item'))) return;
          const side = document.querySelector('.side, .sidebar, .channel-list');
          if (side) side.scrollTo({ top: 0, behavior: 'smooth' });
        };
        document.addEventListener('dblclick', onDbl, true);
        ctx.cleanup(() => document.removeEventListener('dblclick', onDbl, true));
  
      },
    });
})();
