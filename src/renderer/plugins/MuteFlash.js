(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "MuteFlash",
      description: "Red flash when clicking mute-like controls.",
      authors: ['YapYur'],
      tags: ["Voice", "Fun"],
      options: {},
      start(ctx) {
  
        const onClick = (e) => {
          const b = e.target.closest && e.target.closest('button[aria-label*="ute" i],button[title*="ute" i],.mute-btn');
          if (!b) return;
          b.animate([{ boxShadow: '0 0 0 0 var(--danger)' }, { boxShadow: '0 0 0 8px transparent' }], { duration: 450 });
        };
        document.addEventListener('click', onClick, true);
        ctx.cleanup(() => document.removeEventListener('click', onClick, true));
  
      },
    });
})();
