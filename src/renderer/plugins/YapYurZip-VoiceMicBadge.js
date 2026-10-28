(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "VoiceMicBadge",
      description: "Mic glyph next to names of people in voice.",
      authors: ['YapYur'],
      tags: ["Voice", "Appearance"],
      options: {},
      start(ctx) {
  
        const SVG = '<svg class="yyx-vmic" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z"/></svg>';
        const inVoice = (uid) => {
          const st = YM.Store.getState && YM.Store.getState();
          if (!st || !uid) return false;
          const vm = st.voiceMembers || st.voice || {};
          for (const v of Object.values(vm)) {
            const list = Array.isArray(v) ? v : (v && v.members) || [];
            if (list.some((m) => (m.userId || m.user_id || m.id) === uid)) return true;
          }
          return false;
        };
        ctx.cleanup(YM.messages.decorate(({ el, message }) => {
          const head = el.querySelector('.msg-author, .msg-head');
          if (!head) return;
          const uid = message && (message.author_id || message.authorId);
          let ic = head.querySelector('.yyx-vmic');
          if (uid && inVoice(uid)) { if (!ic) head.insertAdjacentHTML('beforeend', SVG); }
          else if (ic) ic.remove();
        }));
        ctx.css('.yyx-vmic{margin-left:4px;opacity:.85;vertical-align:middle;color:var(--accent)}');
  
      },
    });
})();
