export default function() {
    this.get('/products', (schema, request) => {
        const { name } = request.queryParams;
        const allProducts = schema.products.all();

        if (!name) {
            return allProducts;
        }

        return allProducts.filter(product => {
            const productName = (product.name || '').toLowerCase();
            const target = name.toLowerCase();

            return productName.includes(target);
        });
    });

    this.get('/products/:id');
}
