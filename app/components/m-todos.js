import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['list-group','todo-list','center-block'],
	store: Ember.inject.service(),

	actions:{
		addTodo: function (event) {
			const store = this.get('store')
			const $input = this.$('.im')
			const val = this.$('.im').val();

			if(val) {
				const newTodo = store.createRecord('todo', {
					id: Date.now(),
					title: val
				});

				$input.val('');
			}
		},
		cancelAdd() {
			this.$('.im').val('');
		}
	}
});
