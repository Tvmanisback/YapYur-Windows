(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "CapsLockFlag",
      description: "Shows CAPS near the composer when Caps Lock is on.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.yyx-caps{font-size:10px;font-weight:700;color:var(--warning,#f59e0b);margin-left:8px}');
        const ensure = (on) => {
          const ta = document.querySelector('.composer textarea, textarea');
          if (!ta) return;
          let el = ta.parentElement && ta.parentElement.querySelector('.yyx-caps');
          if (!on) { if (el) el.remove(); return; }
          if (!el) { el = dom.h('span', { class: 'yyx-caps' }, 'CAPS'); (ta.parentElement || ta).appendChild(el); }
        };
        const onKey = (e) => { try { ensure(e.getModifierState && e.getModifierState('CapsLock')); } catch (_) {} };
        document.addEventListener('keydown', onKey, true);
        document.addEventListener('keyup', onKey, true);
        ctx.cleanup(() => { document.removeEventListener('keydown', onKey, true); document.removeEventListener('keyup', onKey, true); });
  
      },
    });
})();
