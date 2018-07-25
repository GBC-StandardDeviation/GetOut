var RPG = RPG || {};

RPG.AudioPrefab = function (game_state, name,properties) {
    "use strict";
    Phaser.SoundManager.call(this, game_state.game, );
    this.game_state = game_state;
    this.name = name;





    this.game_state.prefabs[name] = this;
};

RPG.AudioPrefab.prototype = Object.create(Phaser.SoundManager.prototype);
RPG.AudioPrefab.prototype.constructor = RPG.AudioPrefab;