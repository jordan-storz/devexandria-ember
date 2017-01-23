import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bookmark-bookmark', 'Integration | Component | bookmark bookmark', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bookmark-bookmark}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bookmark-bookmark}}
      template block text
    {{/bookmark-bookmark}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
