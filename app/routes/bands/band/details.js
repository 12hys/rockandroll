import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		willTransition: function(transition) {
			let controller = this.controller;
			if(controller.get('isEditing')) {
				let leave = window.confirm("You have unsaved cahnges. Are you sure you want to leave?");
				if(leave) {
					controller.set('isEditing', false);
				} else {
					transition.abort();
				}
			}
		}
	}
});
