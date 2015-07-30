import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition: function() {
			let band = this.modelFor('bands.band');
			Ember.$(document).attr('title', `${band.get('name')} songs - Rock & Roll`);
		},
		createSong: function() {
			let controller = this.get('controller');
			let band = this.modelFor('bands.band');

			let song = this.store.createRecord('song', {
				title: controller.get('title'),
				band: band
			});

			song.save().then(() => {
				controller.set('title', '');
			});
		},
		updateRating: function(params) {
			let song = params.item;
			let rating = params.rating;

			song.set('rating', rating);
		}
	}
});