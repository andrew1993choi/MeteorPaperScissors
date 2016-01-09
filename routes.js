// Main template to be loaded on all pages
Router.configure({
	layoutTemplate: 'main'
});

// Routes for player 1 and player 2
Router.route('/', {
    name: 'home',
	template: 'home'
});
Router.route('/player1');
Router.route('/player2');