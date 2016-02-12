import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m-todo', 'Integration | Component | m todo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
	

  this.render(hbs`{{m-todo }}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#m-todo}}
      template block text
    {{/m-todo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
