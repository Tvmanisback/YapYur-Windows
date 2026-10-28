(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SidebarSearchFocus",
      description: "Press / to focus a search field.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const onKey = (e) => {
          if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
          const t = e.target;
          if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
          const input = document.querySelector('input[type="search"], input[placeholder*="search" i]');
          if (!input) return;
          e.preventDefault();
          input.focus();
        };
        document.addEventListener('keydown', onKey, true);
        ctx.cleanup(() => document.removeEventListener('keydown', onKey, true));
  
      },
    });
})();
