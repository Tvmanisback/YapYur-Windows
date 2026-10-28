(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "QuoteOnDoubleClick",
      description: "Double-click a message to quote it into the composer.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onDbl = (e) => {
          const row = e.target.closest && e.target.closest(YM.messages.selector);
          if (!row) return;
          const author = (row.querySelector('.msg-author') || {}).textContent || 'Someone';
          const text = ((row.querySelector('.msg-text') || {}).textContent || '').trim().slice(0, 140);
          const ta = document.querySelector('.composer textarea, textarea');
          if (!ta) return;
          const snippet = '> ' + author.trim() + ': ' + text + '\n';
          Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(ta, snippet + ta.value);
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.focus();
        };
        document.addEventListener('dblclick', onDbl, true);
        ctx.cleanup(() => document.removeEventListener('dblclick', onDbl, true));
  
      },
    });
})();
