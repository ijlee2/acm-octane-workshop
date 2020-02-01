import Route from '@ember/routing/route';

export default class ProductsProductRoute extends Route {
    model(params) {
        return this.store.findRecord('product', params.id);
    }
}
