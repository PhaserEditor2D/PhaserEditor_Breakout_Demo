/**
 * 
 * Common class for all falling objects. 
 * 
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
function BaseObject (game, x, y, key, frame) {
	Phaser.Sprite.call(this, game, x, y, key, frame);
	
	game.physics.arcade.enable(this);
	
	this.body.velocity.y = 50;
}

/** @type Phaser.Sprite */
var BaseObject_proto = Object.create(Phaser.Sprite.prototype);
BaseObject.prototype = BaseObject_proto;
BaseObject.prototype.constructor = BaseObject;

BaseObject.prototype.takeMe = function () {
	this.kill();
};