import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | people-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a list of people with a title', async function (assert) {
    this.set('title', 'List of Programmers');
    this.set('people', ['Ada Lovelace', 'Grace Hopper']);

    await render(hbs`<PeopleList @title={{this.title}} @people={{this.people}} />`);

    assert.dom('h2').hasText('List of Programmers');
    assert.dom('ul li').exists({ count: 2 });
    assert.dom('ul li:nth-child(1) button').hasText('Ada Lovelace');
    assert.dom('ul li:nth-child(2) button').hasText('Grace Hopper');
  });
});
