
// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * Level1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Level1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _brick_blue59 = new BrickBlue(this.game, 350, 390);
	_brick_blue59.data = {
		object: BonusObject
	};
	this.add(_brick_blue59);
	
	var _brick_red = new BrickRed(this.game, 50, 210);
	_brick_red.data = {
		object: GunBonus
	};
	this.add(_brick_red);
	
	var _brick_red1 = new BrickRed(this.game, 400, 210);
	this.add(_brick_red1);
	
	var _brick_green = new BrickGreen(this.game, 0, 300);
	this.add(_brick_green);
	
	var _brick_green1 = new BrickGreen(this.game, 50, 300);
	this.add(_brick_green1);
	
	var _brick_green2 = new BrickGreen(this.game, 100, 300);
	this.add(_brick_green2);
	
	var _brick_green3 = new BrickGreen(this.game, 150, 300);
	this.add(_brick_green3);
	
	var _brick_green4 = new BrickGreen(this.game, 200, 300);
	this.add(_brick_green4);
	
	var _brick_green5 = new BrickGreen(this.game, 250, 300);
	this.add(_brick_green5);
	
	var _brick_green6 = new BrickGreen(this.game, 300, 300);
	this.add(_brick_green6);
	
	var _brick_green7 = new BrickGreen(this.game, 350, 300);
	this.add(_brick_green7);
	
	var _brick_green8 = new BrickGreen(this.game, 400, 300);
	this.add(_brick_green8);
	
	var _brick_green9 = new BrickGreen(this.game, 450, 300);
	this.add(_brick_green9);
	
	var _brick_blue = new BrickBlue(this.game, 0, 150);
	this.add(_brick_blue);
	
	var _brick_blue1 = new BrickBlue(this.game, 50, 150);
	this.add(_brick_blue1);
	
	var _brick_blue2 = new BrickBlue(this.game, 100, 150);
	this.add(_brick_blue2);
	
	var _brick_blue3 = new BrickBlue(this.game, 150, 150);
	this.add(_brick_blue3);
	
	var _brick_blue4 = new BrickBlue(this.game, 150, 180);
	this.add(_brick_blue4);
	
	var _brick_blue5 = new BrickBlue(this.game, 100, 180);
	this.add(_brick_blue5);
	
	var _brick_blue6 = new BrickBlue(this.game, 50, 180);
	this.add(_brick_blue6);
	
	var _brick_blue7 = new BrickBlue(this.game, 0, 180);
	this.add(_brick_blue7);
	
	var _brick_blue8 = new BrickBlue(this.game, 0, 210);
	this.add(_brick_blue8);
	
	var _brick_blue9 = new BrickBlue(this.game, 50, 270);
	this.add(_brick_blue9);
	
	var _brick_blue10 = new BrickBlue(this.game, 100, 210);
	this.add(_brick_blue10);
	
	var _brick_blue11 = new BrickBlue(this.game, 150, 210);
	this.add(_brick_blue11);
	
	var _brick_blue12 = new BrickBlue(this.game, 150, 240);
	this.add(_brick_blue12);
	
	var _brick_blue13 = new BrickBlue(this.game, 150, 270);
	this.add(_brick_blue13);
	
	var _brick_blue14 = new BrickBlue(this.game, 100, 270);
	this.add(_brick_blue14);
	
	var _brick_blue15 = new BrickBlue(this.game, 100, 240);
	this.add(_brick_blue15);
	
	var _brick_blue16 = new BrickBlue(this.game, 50, 240);
	this.add(_brick_blue16);
	
	var _brick_blue17 = new BrickBlue(this.game, 0, 270);
	this.add(_brick_blue17);
	
	var _brick_blue18 = new BrickBlue(this.game, 0, 210);
	this.add(_brick_blue18);
	
	var _brick_blue19 = new BrickBlue(this.game, 0, 240);
	this.add(_brick_blue19);
	
	var _brick_blue20 = new BrickBlue(this.game, 300, 150);
	this.add(_brick_blue20);
	
	var _brick_blue21 = new BrickBlue(this.game, 300, 180);
	this.add(_brick_blue21);
	
	var _brick_blue22 = new BrickBlue(this.game, 300, 210);
	this.add(_brick_blue22);
	
	var _brick_blue23 = new BrickBlue(this.game, 300, 240);
	this.add(_brick_blue23);
	
	var _brick_blue24 = new BrickBlue(this.game, 300, 270);
	this.add(_brick_blue24);
	
	var _brick_blue25 = new BrickBlue(this.game, 350, 270);
	this.add(_brick_blue25);
	
	var _brick_blue26 = new BrickBlue(this.game, 450, 270);
	this.add(_brick_blue26);
	
	var _brick_blue27 = new BrickBlue(this.game, 450, 240);
	this.add(_brick_blue27);
	
	var _brick_blue28 = new BrickBlue(this.game, 450, 210);
	this.add(_brick_blue28);
	
	var _brick_blue30 = new BrickBlue(this.game, 450, 150);
	this.add(_brick_blue30);
	
	var _brick_blue31 = new BrickBlue(this.game, 400, 150);
	this.add(_brick_blue31);
	
	var _brick_blue32 = new BrickBlue(this.game, 400, 180);
	this.add(_brick_blue32);
	
	var _brick_blue33 = new BrickBlue(this.game, 400, 270);
	this.add(_brick_blue33);
	
	var _brick_blue34 = new BrickBlue(this.game, 400, 240);
	this.add(_brick_blue34);
	
	var _brick_blue35 = new BrickBlue(this.game, 350, 240);
	_brick_blue35.data = {
		object: BonusObject
	};
	this.add(_brick_blue35);
	
	var _brick_blue36 = new BrickBlue(this.game, 350, 210);
	this.add(_brick_blue36);
	
	var _brick_blue37 = new BrickBlue(this.game, 350, 180);
	this.add(_brick_blue37);
	
	var _brick_blue38 = new BrickBlue(this.game, 350, 150);
	this.add(_brick_blue38);
	
	var _brick_gray = new BrickGray(this.game, 200, 150);
	this.add(_brick_gray);
	
	var _brick_gray1 = new BrickGray(this.game, 250, 150);
	this.add(_brick_gray1);
	
	var _brick_gray2 = new BrickGray(this.game, 250, 180);
	this.add(_brick_gray2);
	
	var _brick_gray3 = new BrickGray(this.game, 200, 180);
	this.add(_brick_gray3);
	
	var _brick_gray4 = new BrickGray(this.game, 200, 210);
	this.add(_brick_gray4);
	
	var _brick_gray5 = new BrickGray(this.game, 250, 210);
	this.add(_brick_gray5);
	
	var _brick_gray6 = new BrickGray(this.game, 250, 240);
	this.add(_brick_gray6);
	
	var _brick_gray7 = new BrickGray(this.game, 200, 240);
	this.add(_brick_gray7);
	
	var _brick_gray8 = new BrickGray(this.game, 200, 270);
	this.add(_brick_gray8);
	
	var _brick_gray9 = new BrickGray(this.game, 250, 270);
	this.add(_brick_gray9);
	
	var _brick_blue39 = new BrickBlue(this.game, 0, 330);
	this.add(_brick_blue39);
	
	var _brick_blue40 = new BrickBlue(this.game, 50, 330);
	this.add(_brick_blue40);
	
	var _brick_blue41 = new BrickBlue(this.game, 100, 330);
	_brick_blue41.data = {
		object: BonusObject
	};
	this.add(_brick_blue41);
	
	var _brick_blue42 = new BrickBlue(this.game, 150, 330);
	this.add(_brick_blue42);
	
	var _brick_blue43 = new BrickBlue(this.game, 200, 330);
	this.add(_brick_blue43);
	
	var _brick_blue44 = new BrickBlue(this.game, 250, 330);
	this.add(_brick_blue44);
	
	var _brick_blue45 = new BrickBlue(this.game, 300, 330);
	this.add(_brick_blue45);
	
	var _brick_blue46 = new BrickBlue(this.game, 350, 330);
	this.add(_brick_blue46);
	
	var _brick_blue47 = new BrickBlue(this.game, 400, 330);
	this.add(_brick_blue47);
	
	var _brick_blue48 = new BrickBlue(this.game, 450, 330);
	this.add(_brick_blue48);
	
	var _brick_red2 = new BrickRed(this.game, 50, 360);
	this.add(_brick_red2);
	
	var _brick_red3 = new BrickRed(this.game, 150, 360);
	this.add(_brick_red3);
	
	var _brick_red4 = new BrickRed(this.game, 250, 360);
	this.add(_brick_red4);
	
	var _brick_red5 = new BrickRed(this.game, 350, 360);
	this.add(_brick_red5);
	
	var _brick_red6 = new BrickRed(this.game, 450, 360);
	this.add(_brick_red6);
	
	var _brick_red7 = new BrickRed(this.game, 450, 120);
	this.add(_brick_red7);
	
	var _brick_red8 = new BrickRed(this.game, 350, 120);
	this.add(_brick_red8);
	
	var _brick_red9 = new BrickRed(this.game, 250, 120);
	this.add(_brick_red9);
	
	var _brick_red10 = new BrickRed(this.game, 150, 120);
	this.add(_brick_red10);
	
	var _brick_red11 = new BrickRed(this.game, 50, 120);
	this.add(_brick_red11);
	
	var _brick_blue49 = new BrickBlue(this.game, 50, 390);
	this.add(_brick_blue49);
	
	var _brick_blue50 = new BrickBlue(this.game, 0, 390);
	_brick_blue50.data = {
		object: GunBonus
	};
	this.add(_brick_blue50);
	
	var _brick_blue51 = new BrickBlue(this.game, 100, 390);
	this.add(_brick_blue51);
	
	var _brick_blue52 = new BrickBlue(this.game, 150, 390);
	this.add(_brick_blue52);
	
	var _brick_blue53 = new BrickBlue(this.game, 200, 390);
	this.add(_brick_blue53);
	
	var _brick_blue54 = new BrickBlue(this.game, 250, 390);
	this.add(_brick_blue54);
	
	var _brick_blue55 = new BrickBlue(this.game, 300, 390);
	this.add(_brick_blue55);
	
	var _brick_blue57 = new BrickBlue(this.game, 400, 390);
	this.add(_brick_blue57);
	
	var _brick_blue58 = new BrickBlue(this.game, 450, 390);
	this.add(_brick_blue58);
	
	var _brick_blue29 = new BrickBlue(this.game, 450, 180);
	_brick_blue29.data = {
		object: BonusObject
	};
	this.add(_brick_blue29);
	
	
	
	
}

/** @type Phaser.Group */
var Level1_proto = Object.create(Phaser.Group.prototype);
Level1.prototype = Level1_proto;
Level1.prototype.constructor = Level1;

/* --- end generated code --- */
// -- user code here --
