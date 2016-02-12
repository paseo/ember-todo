import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['list-group-item'],
	isEditing: false,
	store: Ember.inject.service(),
	didRender() {
		const isEditing = this.get('isEditing');
		if(isEditing) {
			this.$('.edit').focus();
		}
	},
	actions:{
		toggleComplete(e) {
			const todo = this.get('record');
			const $checkbox = this.$('.toggle');
			const checked = $checkbox.prop('checked');

			todo.set('isCompleted', checked);
		},
		doneEditing() {
			const todo = this.get('record');
			const bufer = this.get('buferedTitle');
			if(bufer) {
				todo.set('title',bufer);
			}

			this.send('cancelEditing');
		},
		cancelEditing() {
			this.set('isEditing', false)
		},
		editTodo() {
			const bufer = this.get('buferedTitle');
			if(!bufer) {
				this.set('buferedTitle', this.get('record.title'));
			}
			this.set('isEditing', true);
		},
		removeTodoo() {
			this.get('record').destroyRecord();
		}
	}
});
