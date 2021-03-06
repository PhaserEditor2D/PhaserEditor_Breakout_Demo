
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.3 (Phaser v2.6.2)


/**
 * GunBonus
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function GunBonus(aGame, aX, aY, aKey, aFrame) {
	BaseObject.call(this, aGame, aX, aY, aKey || 'textures', aFrame == undefined || aFrame == null? 'gun' : aFrame);
	
}

/** @type BaseObject */
var GunBonus_proto = Object.create(BaseObject.prototype);
GunBonus.prototype = GunBonus_proto;
GunBonus.prototype.constructor = GunBonus;

/* --- end generated code --- */

GunBonus.prototype.takeMe = function () {
	/** @type Level */
	var state = this.game.state.getCurrentState();
	
	state.fPaddle.fireWeapon();
	
	BaseObject.prototype.takeMe.call(this);
};
