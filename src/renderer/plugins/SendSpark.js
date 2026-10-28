(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SendSpark",
      description: "Particle burst when you send a message.",
      authors: ['YapYur'],
      tags: ["Fun"],
      options: {},
      start(ctx) {
  
        const burst = (x, y) => {
          for (let i = 0; i < 12; i++) {
            const p = dom.h('div', { style: { position: 'fixed', left: x + 'px', top: y + 'px', width: '5px', height: '5px', borderRadius: '2px', background: ['var(--accent)','#f472b6','#fbbf24','#34d399','#60a5fa'][i % 5], zIndex: '2147483000', pointerEvents: 'none' } });
            document.body.appendChild(p);
            const ang = Math.random() * Math.PI * 2, dist = 36 + Math.random() * 50;
            p.animate([
              { transform: 'translate(0,0) scale(1)', opacity: 1 },
              { transform: 'translate(' + Math.cos(ang) * dist + 'px,' + Math.sin(ang) * dist + 'px) scale(0)', opacity: 0 },
            ], { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,0,1)' }).onfinish = () => p.remove();
          }
        };
        const onKey = (e) => {
          if (e.key !== 'Enter' || e.shiftKey) return;
          const ta = e.target;
          if (!(ta instanceof HTMLTextAreaElement) || !ta.value.trim()) return;
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          const r = ta.getBoundingClientRect();
          burst(r.right - 16, r.top);
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
