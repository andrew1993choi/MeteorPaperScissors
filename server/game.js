// ****************** Server Logic ****************** //

Meteor.startup(function () {
	// Create collection to be shared by clients
	Game = new Mongo.Collection('game');
	
	// Remove all previous collections to reset games on startup
	Game.remove({});
	
	// There should only be 1 game since there is only player 1 and player 2
	Game.insert({
		_id: "1",
		player1: "gone",
		player2: "gone",
		move1: "none",
		move2: "none",
	});
	
	// publish game
	Meteor.publish('game', function () {
		return Game.find();
	});
});

