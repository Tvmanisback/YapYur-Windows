(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ShiftEnterHint",
      description: "Tip under composer: Enter to send.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.composer{position:relative}.yyx-seh{position:absolute;right:10px;bottom:4px;font-size:10px;color:var(--text-faint);pointer-events:none}');
        ctx.watch('.composer, [class*="composer"]', (box) => {
          if (box.querySelector('.yyx-seh')) return;
          box.appendChild(dom.h('span', { class: 'yyx-seh' }, 'Enter to send · Shift+Enter newline'));
        });
  
      },
    });
})();
