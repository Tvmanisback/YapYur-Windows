(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "JumpLatestFab",
      description: "Floating button to jump to newest messages.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        const btn = dom.h('button', {
          type: 'button', class: 'yyx-jump', title: 'Jump to latest',
          style: { position: 'fixed', right: '22px', bottom: '90px', zIndex: '40', padding: '8px 12px', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--bg-elev)', color: 'var(--text)', cursor: 'pointer', font: '12px system-ui', boxShadow: '0 4px 14px #0005', display: 'none' },
          onClick: () => {
            const sc = document.querySelector('.messages, .msg-list, [class*="message-list"]');
            if (sc) sc.scrollTo({ top: sc.scrollHeight, behavior: 'smooth' });
          },
        }, '↓ Latest');
        (document.body || document.documentElement).appendChild(btn);
        const onScroll = util.debounce(() => {
          const sc = document.querySelector('.messages, .msg-list, [class*="message-list"]');
          if (!sc) { btn.style.display = 'none'; return; }
          btn.style.display = (sc.scrollHeight - sc.scrollTop - sc.clientHeight < 90) ? 'none' : 'block';
        }, 100);
        document.addEventListener('scroll', onScroll, true);
        ctx.cleanup(() => { document.removeEventListener('scroll', onScroll, true); btn.remove(); });
  
      },
    });
})();
