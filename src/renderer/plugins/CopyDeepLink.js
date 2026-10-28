(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "CopyDeepLink",
      description: "Copy a channel+message link from the action bar.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.cleanup(YM.messages.decorate(({ el, id, message }) => {
          const actions = el.querySelector('.msg-actions');
          if (!actions || !id || actions.querySelector('.yyx-deeplink')) return;
          actions.prepend(dom.h('button', { type: 'button', class: 'icon-btn yyx-deeplink', title: 'Copy link',
            html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
            onClick: (e) => {
              e.stopPropagation();
              const chan = (message && message.channel_id) || '';
              const url = location.origin + location.pathname.split('?')[0] + (chan ? '?channel=' + chan + '&message=' + id : '#' + id);
              util.copyText(url).then((ok) => YM.toast(ok ? 'Link copied' : 'Failed'));
            } }));
        }));
  
      },
    });
})();
