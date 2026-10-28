(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SelectAllMessage",
      description: "Triple-click selects message text only.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onClick = (e) => {
          if (e.detail !== 3) return;
          const text = e.target.closest && e.target.closest('.msg-text');
          if (!text) return;
          const range = document.createRange();
          range.selectNodeContents(text);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        };
        document.addEventListener('click', onClick, true);
        ctx.cleanup(() => document.removeEventListener('click', onClick, true));
  
      },
    });
})();
