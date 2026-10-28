(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "CursorBuddy",
      description: "Soft orb that follows the cursor.",
      authors: ['YapYur'],
      tags: ["Fun"],
      options: {},
      start(ctx) {
  
        const orb = dom.h('div', { style: { position: 'fixed', left: '0', top: '0', width: '18px', height: '18px', borderRadius: '50%', zIndex: '2147483000', pointerEvents: 'none', background: 'radial-gradient(circle at 30% 30%, color-mix(in srgb,var(--accent) 80%,#fff), var(--accent))', boxShadow: '0 0 12px color-mix(in srgb,var(--accent) 50%,transparent)', opacity: '.7' } });
        let x = 20, y = 20, mx = 20, my = 20;
        const move = (e) => { mx = e.clientX; my = e.clientY; };
        document.addEventListener('mousemove', move, true);
        (document.body || document.documentElement).append(orb);
        ctx.interval(() => {
          x += (mx - x) * 0.18; y += (my - y) * 0.18;
          orb.style.transform = 'translate(' + Math.round(x - 9) + 'px,' + Math.round(y - 9) + 'px)';
        }, 16);
        ctx.cleanup(() => { document.removeEventListener('mousemove', move, true); orb.remove(); });
  
      },
    });
})();
