(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "SpellOn",
      description: "Keeps spellcheck on the composer.",
      authors: ['YapYur'],
      tags: ["Utility"],
      options: {},
      start(ctx) {
  
        ctx.watch('textarea', (ta) => {
          if (ta.closest('.composer') || ta.closest('[class*="composer"]')) ta.spellcheck = true;
        });
  
      },
    });
})();
