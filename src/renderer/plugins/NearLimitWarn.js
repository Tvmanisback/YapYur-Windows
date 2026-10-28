(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "NearLimitWarn",
      description: "Shows characters remaining near the 2000 limit.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.yyx-left{font-size:11px;margin-left:6px}');
        ctx.watch('textarea', (ta) => {
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          const tick = () => {
            let el = ta.parentElement && ta.parentElement.querySelector('.yyx-left');
            const left = 2000 - ta.value.length;
            if (left > 250) { if (el) el.remove(); return; }
            if (!el) { el = dom.h('span', { class: 'yyx-left' }); (ta.parentElement || ta).appendChild(el); }
            el.textContent = left + ' left';
            el.style.color = left < 0 ? 'var(--danger)' : 'var(--warning,#f59e0b)';
          };
          ta.addEventListener('input', tick); tick();
        });
  
      },
    });
})();
