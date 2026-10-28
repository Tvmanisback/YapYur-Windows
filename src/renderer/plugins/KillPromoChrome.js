(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "KillPromoChrome",
      description: "Hide promo/upsell chrome.",
      authors: ['YapYur'],
      tags: ["Appearance"],
      options: {},
      start(ctx) {
        ctx.css(".promo-banner,.upsell,.help-nudge,[class*=\"upsell\"],[class*=\"promo\"]{display:none!important}");
      },
    });
})();
