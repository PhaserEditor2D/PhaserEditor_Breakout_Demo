// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.3 (Phaser v2.6.2)


/**
 * BrickRed
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function BrickRed(aGame, aX, aY, aKey, aFrame) {
	BaseBrick.call(this, aGame, aX, aY, aKey || 'textures', aFrame == undefined || aFrame == null? 'brick-red' : aFrame);
	
}

/** @type BaseBrick */
var BrickRed_proto = Object.create(BaseBrick.prototype);
BrickRed.prototype = BrickRed_proto;
BrickRed.prototype.constructor = BrickRed;

/* --- end generated code --- */

BrickRed.prototype.breakMe = function() {
	this.__breaking = true;
	var bricks = this.getState().bricks;
	bricks.forEach(function(b) {
		if (b !== this 
				&& !b.__breaking
				&& b.alive
				&& b.x >= this.x - 50
				&& b.x <= this.x + 50 
				&& b.y >= this.y - 30
				&& b.y <= this.y + 30) {
			b.breakMe();
		}
	}, this);
	
	this.game.camera.shake(0.01, 300, false);
	BaseBrick.prototype.breakMe.call(this);
	this.__breaking = false;
};
