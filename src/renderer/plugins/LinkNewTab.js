(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "LinkNewTab",
      description: "Open message links in a new tab.",
      authors: ['YapYur'],
      tags: ["Chat"],
      options: {},
      start(ctx) {
  
        ctx.cleanup(YM.messages.decorate(({ el }) => {
          el.querySelectorAll('.msg-text a[href]').forEach((a) => { a.target = '_blank'; a.rel = 'noopener noreferrer'; });
        }));
  
      },
    });
})();
