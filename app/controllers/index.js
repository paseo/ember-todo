import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		abc(record) {
			record.destroyRecord();
		}
	}
});
