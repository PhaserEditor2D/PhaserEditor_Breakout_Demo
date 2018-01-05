// -- user code here --

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


/**
 * LevelScene.
 */
function LevelScene() {
	
	Phaser.State.call(this);
	
	this.resetGameCounters();
	
}

/** @type Phaser.State */
var LevelScene_proto = Object.create(Phaser.State.prototype);
LevelScene.prototype = LevelScene_proto;
LevelScene.prototype.constructor = LevelScene;

LevelScene.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
	
};

LevelScene.prototype.preload = function () {
	
};

LevelScene.prototype.create = function () {
	
	this.beforeCreate();
	
	var _group = new Background(this.game);
	
	var _tubes = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	this.add.tileSprite(50, 30, 500, 30, 'textures', 'tube-h', _tubes);
	
	this.add.tileSprite(550, 60, 25, 740, 'textures', 'tube-v', _tubes);
	
	this.add.tileSprite(25, 60, 25, 740, 'textures', 'tube-v', _tubes);
	
	var _objects = this.add.group();
	
	var _ball = new Ball(this.game, 286, 683);
	this.add.existing(_ball);
	
	var _paddle = new Paddle(this.game, 263, 723);
	this.add.existing(_paddle);
	
	var _ball1 = this.add.sprite(539, 7, 'textures', 'ball');
	_ball1.scale.setTo(0.5, 0.5);
	
	var _ballText = this.add.text(557, 0, '0', {"font":"bold 30px Arial","fill":"#ffffff"});
	
	var _levelText = this.add.text(506, 0, '0', {"font":"bold 30px Arial","fill":"#ffffff"});
	
	var _tableIcon = this.add.group();
	_tableIcon.position.setTo(472, 6);
	_tableIcon.scale.setTo(0.3, 0.3);
	
	this.add.sprite(0, 0, 'textures', 'brick-red', _tableIcon);
	
	this.add.sprite(50, 0, 'textures', 'brick-green', _tableIcon);
	
	this.add.sprite(50, 30, 'textures', 'brick-blue', _tableIcon);
	
	this.add.sprite(0, 30, 'textures', 'brick-gray', _tableIcon);
	
	_tubes.setAll("body.immovable", true);
	
	
	// public fields
	
	this.fTubes = _tubes;
	this.fObjects = _objects;
	this.fBall = _ball;
	this.fPaddle = _paddle;
	this.fBallText = _ballText;
	this.fLevelText = _levelText;
	this.afterCreate();
	
};

/* --- end generated code --- */

LevelScene.prototype.resetGameCounters = function() {
	this.ballsCount = 2;
	this.currentTableIndex = 0;
};

LevelScene.prototype.beforeCreate = function() {
	if (!this.levels) {
		// we excecute this just once in the game.
		this.levels = [ Level1, Level2, Level3 ];
	}
};

LevelScene.prototype.afterCreate = function() {
	var tableCtr = this.levels[this.currentTableIndex];

	this.bricks = new tableCtr(this.game);
	this.bricks.position.set(50, 25);

	this.objects = this.fObjects;
	this.objects.position.set(50, 25);

	this.fLevelText.setText(this.currentTableIndex + 1);
	this.updateBallsText();

	this.fBall.toPlace();
};

LevelScene.prototype.updateBallsText = function() {
	this.fBallText.setText(this.ballsCount);
};

LevelScene.prototype.restart = function(tableIndex) {
	this.camera.fade("#000", 2000);
	this.time.events.add(2000, function() {
		this.currentTableIndex = tableIndex;
		if (this.currentTableIndex == this.levels.length) {
			this.currentTableIndex = 0;
		}
		this.game.state.start("LevelScene");
	}, this);
};

LevelScene.prototype.update = function() {

	var gameOver = false;

	// check if the ball falls down the screen
	if (this.fBall.alive && !this.fBall.inWorld) {
		
		if (this.ballsCount == 0) {
			// if we do not have more balls, set it to game over
			gameOver = true;
		} else {
			// if there are more balls

			// lose a ball
			this.ballsCount--;
			this.updateBallsText();

			// move the ball to the initial position
			this.fBall.toPlace();
			
			// stop shooting, you missed the ball
			this.fPaddle.stopWeapon();

		}

	}

	// we set the level is completed, unless we find an alive brick

	var levelCompleted = true;

	for (var i = 0; i < this.bricks.length; i++) {

		/** @type BaseBrick */
		var brick = this.bricks.getAt(i);

		if (brick.breakable && !brick.broken) {
			// this brick is alive, so the level is not finished yet
			levelCompleted = false;
			break;
		}
	}

	if (gameOver || levelCompleted) {
		// kill all falling objects
		this.objects.callAll("kill");
		
		// kill the ball, we do not want it to keep on breaking things.
		this.fBall.kill();
		
		// stop the paddle weapon
		this.fPaddle.stopWeapon();
	}

	if (levelCompleted) {
		// restart the state and move to the next table
		this.restart(this.currentTableIndex + 1);
	}

	if (gameOver) {
		// reset game counters
		this.resetGameCounters();
		// start with the first table
		this.restart(0);
	}
};