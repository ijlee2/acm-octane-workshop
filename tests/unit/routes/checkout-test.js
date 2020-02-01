import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | checkout', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:checkout');
        assert.ok(route);
    });
});
