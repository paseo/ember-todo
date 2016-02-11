import Ember from 'ember';

export default Ember.Component.extend({
	isEditing: false,
	store: Ember.inject.service(),
	actions:{
		toggleComplete(e) {
			const todo = this.get('record')
			const $checkbox = this.$('.toggle');
			const checked = $checkbox.prop('checked')

			console.log('toggleComplete', checked)

			todo.set('isCompleted', checked);
		},
		doneEditing() {
			const todo = this.get('record');
			var bufer = this.$('.edit').val();
			if(bufer) {
				todo.set('title',bufer);
				// this.set('title', bufer);
			}
			this.set('isEditing', false);
		},
		cancelEditing() {
			this.set('isEditing', false)
		},
		editTodo(todo) {
			this.set('buferedTittle',this.get('title'));
			this.set('isEditing', true);
		},
		removeTodo(todo) {
			todo.destroyRecord();
		}
	}
});
