(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "FullTimeTooltip",
      description: "Hover timestamps for full local date/time.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.cleanup(YM.messages.decorate(({ el, message }) => {
          const t = el.querySelector('.msg-time, time, .timestamp');
          if (!t || t.dataset.yyFt) return;
          t.dataset.yyFt = '1';
          const iso = message && (message.created_at || message.createdAt);
          t.title = iso ? util.formatDateTime(iso) : (t.textContent || '').trim();
        }));
  
      },
    });
})();
