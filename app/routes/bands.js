import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('band');
	},
	actions: {
		didTransition: function() {
			Ember.$(document).attr('title', 'Bands - Rock & Roll');
		},
		createBand: function() {
			var controller = this.get('controller');

			var band = this.store.createRecord('band', controller.getProperties('name'));
			band.save().then(() => {
				controller.set('name', '');
				this.transitionTo('bands.band.songs', band);
			});
		}
	}
});