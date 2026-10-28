(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "TypingSideDot",
      description: "Accent dot on chats where someone is typing.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.css('.chat-row[data-yyx-typ]::after,.nav-item[data-yyx-typ]::after{content:"";position:absolute;top:8px;right:8px;width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent)}');
        ctx.css('.chat-row,.nav-item{position:relative}');
        const tick = () => {
          const st = YM.Store.getState && YM.Store.getState();
          const typing = (st && st.typing) || {};
          document.querySelectorAll('.chat-row, .nav-item').forEach((row) => {
            const id = row.getAttribute('data-nav-chan') || row.getAttribute('data-channel-id') || row.dataset.channelId;
            const on = id && typing[id] && (Array.isArray(typing[id]) ? typing[id].length : Object.keys(typing[id] || {}).length);
            row.toggleAttribute('data-yyx-typ', !!on);
          });
        };
        ctx.interval(tick, 1200);
  
      },
    });
})();
