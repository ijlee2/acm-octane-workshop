import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
    queryParams = {
        name: {
            refreshModel: true
        }
    };

    model(params) {
        return this.store.query('product', params);
    }
}
