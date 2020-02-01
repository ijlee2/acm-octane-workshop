import Route from '@ember/routing/route';

export default class CheckoutRoute extends Route {
    model() {
        return [
            {
                name: 'Vanilla Ice Cream Cake',
                price: 40
            },
            {
                name: 'Waterloo 12-Pack',
                price: 4
            },
            {
                name: 'Ember.js Stickers',
                price: 8
            }
        ];
    }
}
