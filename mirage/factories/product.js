import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import { generateBaseModel, randomInteger } from '../helpers/product';

export default Factory.extend({
    baseModel() {
        return generateBaseModel();
    },

    name() {
        return `${faker.commerce.productMaterial()} ${this.baseModel.name}`;
    },

    price() {
        return randomInteger(1, 100);
    },

    description() {
        return faker.lorem.sentences();
    },

    imageUrl() {
        return this.baseModel.imageUrl;
    },

    rating() {
        return 0.5 * randomInteger(1, 10);
    },

    seller() {
        return faker.company.companyName(0);
    }
});
