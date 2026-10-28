(function () {
  // Imported from the YapYur ZIP source; kept as a standalone desktop plugin.
  const dom = YM.dom;
  const util = YM.util;
  YM.definePlugin({
      name: "VoiceRoomTint",
      description: "Accent edge on the voice panel when visible.",
      authors: ['YapYur'],
      tags: ["Voice", "Appearance"],
      options: {},
      start(ctx) {
        ctx.css('.voice-view,.voice-panel,[class*="voice-view"]{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 35%,transparent)}');
      },
    });
})();
