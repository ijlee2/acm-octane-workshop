import EmberRouter from '@ember/routing/router';
import config from 'acm-octane-workshop/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('products', function() {
        this.route('product', { path: '/:id' });
    });

    this.route('checkout');
});
