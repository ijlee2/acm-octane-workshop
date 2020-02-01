import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
    @attr name;
    @attr price;
    @attr description;
    @attr imageUrl;
    @attr rating;
    @attr seller;
}
