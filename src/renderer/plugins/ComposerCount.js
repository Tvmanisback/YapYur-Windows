(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ComposerCount",
      description: "Live character count beside the composer.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.yyx-ccount{font-size:11px;color:var(--text-faint);margin-left:8px;font-variant-numeric:tabular-nums}');
        ctx.watch('textarea', (ta) => {
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          const tick = () => {
            let el = ta.parentElement && ta.parentElement.querySelector('.yyx-ccount');
            if (!el) { el = dom.h('span', { class: 'yyx-ccount' }); (ta.parentElement || ta).appendChild(el); }
            const n = ta.value.length;
            el.textContent = n ? String(n) : '';
            el.style.color = n > 1800 ? 'var(--danger)' : n > 1500 ? 'var(--warning,#f59e0b)' : 'var(--text-faint)';
          };
          ta.addEventListener('input', tick); tick();
        });
  
      },
    });
})();
