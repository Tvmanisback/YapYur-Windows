(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ComposerMonoToggle",
      description: "Double-click composer chrome to toggle monospace.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        let mono = false;
        const onDbl = (e) => {
          const box = e.target.closest && e.target.closest('.composer, [class*="composer"]');
          if (!box) return;
          const ta = box.querySelector('textarea');
          if (!ta) return;
          mono = !mono;
          ta.style.fontFamily = mono ? 'ui-monospace, SFMono-Regular, Menlo, monospace' : '';
          YM.toast(mono ? 'Monospace on' : 'Monospace off', { duration: 1200 });
        };
        document.addEventListener('dblclick', onDbl, true);
        ctx.cleanup(() => document.removeEventListener('dblclick', onDbl, true));
  
      },
    });
})();
