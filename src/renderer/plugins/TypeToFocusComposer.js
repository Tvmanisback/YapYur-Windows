(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "TypeToFocusComposer",
      description: "Letter keys outside inputs focus the composer.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onKey = (e) => {
          if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
          const t = e.target;
          if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
          const ta = document.querySelector('.composer textarea, textarea');
          if (ta) ta.focus();
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
