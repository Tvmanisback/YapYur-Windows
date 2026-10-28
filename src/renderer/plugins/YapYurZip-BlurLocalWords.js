(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "BlurLocalWords",
      description: "Blur chosen words on your screen; hover to reveal.",
      authors: ['YapYur'],
      tags: ["Privacy"],
      options: {"words": {"type": "string", "default": "", "description": "Comma-separated words"}},
      start(ctx) {
  
        ctx.css('.yyx-blurw{filter:blur(5px);cursor:help;transition:filter .15s}.yyx-blurw:hover{filter:none}');
        const apply = () => {
          const words = String(ctx.settings.store.words || '').split(/[,;\n]+/).map((w) => w.trim()).filter((w) => w.length > 1);
          if (!words.length) return;
          const re = new RegExp('(' + words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
          document.querySelectorAll('.msg-text').forEach((el) => {
            if (el.dataset.yyBw === '1') return;
            const text = el.textContent || '';
            if (!re.test(text)) return;
            re.lastIndex = 0;
            el.dataset.yyBw = '1';
            el.innerHTML = util.escapeHtml(text).replace(re, '<span class="yyx-blurw">$1</span>');
          });
        };
        ctx.onMutate(util.debounce(apply, 250));
        ctx.cleanup(ctx.settings.onChange(apply));
        apply();
  
      },
    });
})();
