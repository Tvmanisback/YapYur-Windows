(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "UnloadGuard",
      description: "Warn before leave if composer has text.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onBefore = (e) => {
          const ta = document.querySelector('.composer textarea, textarea');
          if (ta && ta.value.trim()) { e.preventDefault(); e.returnValue = ''; }
        };
        window.addEventListener('beforeunload', onBefore);
        ctx.cleanup(() => window.removeEventListener('beforeunload', onBefore));
  
      },
    });
})();
