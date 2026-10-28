(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "EscBlurComposer",
      description: "Escape blurs the composer.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onKey = (e) => {
          if (e.key !== 'Escape') return;
          const ta = document.activeElement;
          if (ta && ta.tagName === 'TEXTAREA') ta.blur();
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
