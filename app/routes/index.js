import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo')
	},
	actions:{
		addTodo(e) {
			const $input = $(e.target);
			const val = $input.val();

			if(val) {
				const record = this.store.createRecord('todo', {
					id: Date.now(),
					title: val
				});

				//clear input
				$input.val('');
			}
		},
		cancelAdd() {
			this.$('.im').val('');
		}
	}
});
