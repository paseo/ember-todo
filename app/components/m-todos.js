import Ember from 'ember';

export default Ember.Component.extend({

	actions:{
		enter: function (event) {
			console.log('enter');
			console.log(event, typeof event)

			var val = this.$('.im').val();

			this.store.createRecord('todo', {
				content: val
			})
		}
	}
});