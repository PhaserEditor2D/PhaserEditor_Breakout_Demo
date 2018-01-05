window.onload = function() {
	var game = new Phaser.Game(600, 800, Phaser.AUTO);

	// Add the States your game has.
	game.state.add("Boot", Boot, true);	
};
