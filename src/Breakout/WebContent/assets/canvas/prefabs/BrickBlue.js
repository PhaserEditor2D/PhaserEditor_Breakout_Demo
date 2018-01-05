
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.3 (Phaser v2.6.2)


/**
 * BrickBlue
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function BrickBlue(aGame, aX, aY, aKey, aFrame) {
	BaseBrick.call(this, aGame, aX, aY, aKey || 'textures', aFrame == undefined || aFrame == null? 'brick-blue' : aFrame);
	this.data = {
		object : Snow
	};
	
}

/** @type BaseBrick */
var BrickBlue_proto = Object.create(BaseBrick.prototype);
BrickBlue.prototype = BrickBlue_proto;
BrickBlue.prototype.constructor = BrickBlue;

/* --- end generated code --- */
// -- user code here --
