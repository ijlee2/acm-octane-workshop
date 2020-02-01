export default function(server) {
    server.create('product', {
        name: 'Vanilla Ice Cream Cake',
        description: 'Made with organic herbs',
        price: 40,
        rating: 4.5,
        seller: 'Amy\'s'
    });

    server.create('product', {
        name: 'Ember.js Stickers',
        description: 'Decorate your computer with Tomster and Zoey!',
        price: 8,
        rating: 5,
        seller: 'Ember'
    });

    server.createList('product', 30);
}
