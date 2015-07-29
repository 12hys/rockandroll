import Ember from 'ember';

export default Ember.Controller.extend({
	title: '',
	isAddButtonDisabled: Ember.computed('title', function() {

	}),
	songCreationStarted: false,
	noSong: Ember.computed('model.songs.length', function() {
		debugger; //jshint ignore:line
		return this.get('model.songs.length') === 0;
	})
});