import { action } from '@ember/object';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ProductsController extends Controller {
    queryParams = ['name'];

    @tracked name;
    @tracked products;

    @action filterByName(name) {
        this.name = name || null;
    }
}
