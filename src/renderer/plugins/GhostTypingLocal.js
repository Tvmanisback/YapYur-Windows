(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "GhostTypingLocal",
      description: "Local drafting label while the composer has text.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.yyx-draft{font-size:11px;color:var(--text-faint);margin-left:8px}');
        ctx.watch('textarea', (ta) => {
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          const tick = () => {
            let el = ta.parentElement && ta.parentElement.querySelector('.yyx-draft');
            if (!ta.value) { if (el) el.remove(); return; }
            if (!el) { el = dom.h('span', { class: 'yyx-draft' }, 'drafting…'); (ta.parentElement || ta).appendChild(el); }
          };
          ta.addEventListener('input', tick); tick();
        });
  
      },
    });
})();
