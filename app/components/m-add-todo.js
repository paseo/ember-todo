import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		doAdd() {
			const store = this.get('store');
			const $input = this.$('.im');
			const title = $input.val();

			if(title) {
				store.createRecord('todo', {title});

				//clear input
				$input.val('');
			}

		},
		cancelAdd() {
			const $input = this.$('.im');
			$input.val('');
		}
	}
});
