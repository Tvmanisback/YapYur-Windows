(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ClockCorner",
      description: "Local clock in the bottom-left corner.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const el = dom.h('div', { style: { position: 'fixed', left: '10px', bottom: '10px', zIndex: '30', font: '11px ui-monospace,monospace', color: 'var(--text-faint)', pointerEvents: 'none', opacity: '.7' } });
        (document.body || document.documentElement).appendChild(el);
        const tick = () => { el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); };
        tick(); ctx.interval(tick, 1000); ctx.cleanup(() => el.remove());
  
      },
    });
})();
