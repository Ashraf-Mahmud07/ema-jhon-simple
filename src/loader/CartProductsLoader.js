import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProuducts = await fetch('products.json');
    const products = await loadedProuducts.json();
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart){
        const addedProduct = products.find(pb => pb.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductsLoader;