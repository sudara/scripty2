Effect.Parallel = Class.create(Effect.Base, {
  initialize: function($super, effects, options) {
    this.effects = effects || [];
    return $super(options);
  },

  setup: function() {
    this.effects.invoke('setup');
  },

  update: function(position) {
    this.effects.invoke('update', position);
  }
});