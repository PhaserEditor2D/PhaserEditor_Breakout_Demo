
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * Level2.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Level2(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _brick_green = new BrickGreen(this.game, 0, 420);
	_brick_green.data = {
		object: BonusObject
	};
	this.add(_brick_green);
	
	var _brick_green1 = new BrickGreen(this.game, 50, 420);
	_brick_green1.data = {
		object: Leaf
	};
	this.add(_brick_green1);
	
	var _brick_green2 = new BrickGreen(this.game, 100, 420);
	_brick_green2.data = {
		object: GunBonus
	};
	this.add(_brick_green2);
	
	var _brick_green3 = new BrickGreen(this.game, 150, 420);
	this.add(_brick_green3);
	
	var _brick_green4 = new BrickGreen(this.game, 200, 420);
	this.add(_brick_green4);
	
	var _brick_green6 = new BrickGreen(this.game, 300, 420);
	this.add(_brick_green6);
	
	var _brick_green7 = new BrickGreen(this.game, 350, 420);
	this.add(_brick_green7);
	
	var _brick_green8 = new BrickGreen(this.game, 400, 420);
	this.add(_brick_green8);
	
	var _brick_red = new BrickRed(this.game, 200, 90);
	this.add(_brick_red);
	
	var _brick_red1 = new BrickRed(this.game, 150, 60);
	this.add(_brick_red1);
	
	var _brick_red2 = new BrickRed(this.game, 100, 60);
	this.add(_brick_red2);
	
	var _brick_red3 = new BrickRed(this.game, 50, 90);
	this.add(_brick_red3);
	
	var _brick_red4 = new BrickRed(this.game, 50, 120);
	this.add(_brick_red4);
	
	var _brick_red5 = new BrickRed(this.game, 50, 150);
	this.add(_brick_red5);
	
	var _brick_red6 = new BrickRed(this.game, 100, 180);
	this.add(_brick_red6);
	
	var _brick_red7 = new BrickRed(this.game, 150, 210);
	this.add(_brick_red7);
	
	var _brick_red8 = new BrickRed(this.game, 200, 240);
	this.add(_brick_red8);
	
	var _brick_red9 = new BrickRed(this.game, 250, 210);
	this.add(_brick_red9);
	
	var _brick_red10 = new BrickRed(this.game, 300, 180);
	this.add(_brick_red10);
	
	var _brick_red11 = new BrickRed(this.game, 350, 150);
	this.add(_brick_red11);
	
	var _brick_red12 = new BrickRed(this.game, 350, 120);
	this.add(_brick_red12);
	
	var _brick_red13 = new BrickRed(this.game, 350, 90);
	this.add(_brick_red13);
	
	var _brick_red14 = new BrickRed(this.game, 300, 60);
	this.add(_brick_red14);
	
	var _brick_red15 = new BrickRed(this.game, 250, 60);
	this.add(_brick_red15);
	
	var _brick_green10 = new BrickGreen(this.game, 100, 90);
	this.add(_brick_green10);
	
	var _brick_green11 = new BrickGreen(this.game, 150, 90);
	this.add(_brick_green11);
	
	var _brick_green12 = new BrickGreen(this.game, 150, 120);
	this.add(_brick_green12);
	
	var _brick_green13 = new BrickGreen(this.game, 100, 120);
	this.add(_brick_green13);
	
	var _brick_green14 = new BrickGreen(this.game, 100, 150);
	this.add(_brick_green14);
	
	var _brick_green15 = new BrickGreen(this.game, 150, 180);
	this.add(_brick_green15);
	
	var _brick_green16 = new BrickGreen(this.game, 150, 150);
	this.add(_brick_green16);
	
	var _brick_green17 = new BrickGreen(this.game, 200, 180);
	this.add(_brick_green17);
	
	var _brick_green18 = new BrickGreen(this.game, 200, 210);
	this.add(_brick_green18);
	
	var _brick_green19 = new BrickGreen(this.game, 250, 180);
	this.add(_brick_green19);
	
	var _brick_green20 = new BrickGreen(this.game, 300, 150);
	this.add(_brick_green20);
	
	var _brick_green21 = new BrickGreen(this.game, 300, 120);
	this.add(_brick_green21);
	
	var _brick_green22 = new BrickGreen(this.game, 300, 90);
	this.add(_brick_green22);
	
	var _brick_green23 = new BrickGreen(this.game, 250, 90);
	this.add(_brick_green23);
	
	var _brick_green24 = new BrickGreen(this.game, 250, 120);
	this.add(_brick_green24);
	
	var _brick_green25 = new BrickGreen(this.game, 250, 150);
	this.add(_brick_green25);
	
	var _brick_green26 = new BrickGreen(this.game, 200, 120);
	this.add(_brick_green26);
	
	var _brick_gray = new BrickGray(this.game, 200, 150);
	this.add(_brick_gray);
	
	var _brick_blue = new BrickBlue(this.game, 400, 300);
	this.add(_brick_blue);
	
	var _brick_blue1 = new BrickBlue(this.game, 350, 330);
	this.add(_brick_blue1);
	
	var _brick_blue2 = new BrickBlue(this.game, 400, 360);
	this.add(_brick_blue2);
	
	var _brick_blue3 = new BrickBlue(this.game, 300, 300);
	this.add(_brick_blue3);
	
	var _brick_blue4 = new BrickBlue(this.game, 300, 360);
	_brick_blue4.data = {
		object: BonusObject
	};
	this.add(_brick_blue4);
	
	var _brick_green5 = new BrickGreen(this.game, 250, 420);
	_brick_green5.data = {
		object: BonusObject
	};
	this.add(_brick_green5);
	
	var _brick_green9 = new BrickGreen(this.game, 450, 420);
	_brick_green9.data = {
		object: BonusObject
	};
	this.add(_brick_green9);
	
	
	
	
}

/** @type Phaser.Group */
var Level2_proto = Object.create(Phaser.Group.prototype);
Level2.prototype = Level2_proto;
Level2.prototype.constructor = Level2;

/* --- end generated code --- */
// -- user code here --
