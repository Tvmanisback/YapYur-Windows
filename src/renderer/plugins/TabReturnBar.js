(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "TabReturnBar",
      description: "Accent bar when you return to the tab.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const bar = dom.h('div', { style: { position: 'fixed', top: '0', left: '0', right: '0', height: '3px', background: 'var(--accent)', zIndex: '2147483000', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .35s', pointerEvents: 'none' } });
        document.documentElement.appendChild(bar);
        const onVis = () => {
          if (document.visibilityState === 'visible') {
            bar.style.transform = 'scaleX(1)';
            setTimeout(() => { bar.style.transform = 'scaleX(0)'; }, 500);
          }
        };
        document.addEventListener('visibilitychange', onVis);
        ctx.cleanup(() => { document.removeEventListener('visibilitychange', onVis); bar.remove(); });
  
      },
    });
})();
