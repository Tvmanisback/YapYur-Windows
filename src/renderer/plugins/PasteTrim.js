(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "PasteTrim",
      description: "Trims whitespace on paste into the composer.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        const onPaste = (e) => {
          const ta = e.target;
          if (!(ta instanceof HTMLTextAreaElement)) return;
          if (!(ta.closest('.composer') || ta.closest('[class*="composer"]'))) return;
          const text = e.clipboardData && e.clipboardData.getData('text/plain');
          if (text == null) return;
          const trimmed = text.trim();
          if (trimmed === text) return;
          e.preventDefault();
          const start = ta.selectionStart, end = ta.selectionEnd;
          const next = ta.value.slice(0, start) + trimmed + ta.value.slice(end);
          Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(ta, next);
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.setSelectionRange(start + trimmed.length, start + trimmed.length);
        };
        document.addEventListener('paste', onPaste, true);
        ctx.cleanup(() => document.removeEventListener('paste', onPaste, true));
  
      },
    });
})();
