(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "CopyMsgJson",
      description: "Button on messages to copy JSON payload.",
      authors: ['YapYur'],
      tags: ["Developer", "Chat"],
      options: {},
      start(ctx) {
  
        const ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"/><path d="M16 3h5v5"/><path d="M10 14 21 3"/></svg>';
        ctx.cleanup(YM.messages.decorate(({ el, id, message }) => {
          const actions = el.querySelector('.msg-actions');
          if (!actions || actions.querySelector('.yyx-json')) return;
          actions.prepend(dom.h('button', { type: 'button', class: 'icon-btn yyx-json', title: 'Copy JSON', html: ICON,
            onClick: (e) => { e.stopPropagation(); util.copyText(JSON.stringify({ id, message }, null, 2)).then((ok) => YM.toast(ok ? 'Copied JSON' : 'Copy failed')); } }));
        }));
  
      },
    });
})();
