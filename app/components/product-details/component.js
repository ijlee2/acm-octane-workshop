import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ProductDetailsComponent extends Component {
    @action addProductToCart() {
        const { id, name } = this.args.product;

        alert(`Added ${name} to cart! (ID: ${id})`);
    }
}
