import Component from '@glimmer/component';

export default class ProductCardComponent extends Component {
    isAmazing = (this.args.product.rating === 5);
}
