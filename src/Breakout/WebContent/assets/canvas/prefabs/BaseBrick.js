/**
 * @param {Phaser.Game}
 *            game
 * @param {Number}
 *            x
 * @param {Number}
 *            y
 * @param {String}
 *            key
 * @param {String}
 *            frame
 */
function BaseBrick(game, x, y, key, frame) {
	Phaser.Sprite.call(this, game, x, y, key, frame);

	game.physics.arcade.enable(this);

	this.body.immovable = true;

	this.broken = false;
	
	this.breakable = true;
}

/** @type Phaser.Sprite */
var BaseBrick_proto = Object.create(Phaser.Sprite.prototype);
BaseBrick.prototype = BaseBrick_proto;
BaseBrick.prototype.constructor = BaseBrick;

/**
 * Default "die" routing.
 */
BaseBrick.prototype.breakMe = function() {
	this.lifespan = 300;
	this.broken = true;
	this.game.add.tween(this).to({
		alpha : 0
	}, this.lifespan, "Linear", true);

	if (this.data.object) {
		var obj = new this.data.object(this.game, this.x, this.y);
		this.getState().objects.add(obj);
	}
};

/**
 * Get the current state.
 * 
 * @returns {Level}
 */
BaseBrick.prototype.getState = function() {
	return this.game.state.getCurrentState();
};
