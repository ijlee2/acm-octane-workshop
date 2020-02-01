import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | product-card', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        this.product = {};

        await render(hbs`
            <ProductCard
                @product={{this.product}}
            />
        `);

        assert.ok(true);
    });
});
