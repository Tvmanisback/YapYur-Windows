(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "ScrollMemory",
      description: "Remembers scroll position per path in sessionStorage.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const key = () => 'yyx-scroll:' + location.pathname + location.search;
        const save = util.debounce(() => {
          const sc = document.querySelector('.messages, .msg-list, [class*="message-list"]');
          if (sc) sessionStorage.setItem(key(), String(sc.scrollTop));
        }, 200);
        document.addEventListener('scroll', save, true);
        ctx.cleanup(() => document.removeEventListener('scroll', save, true));
  
      },
    });
})();
