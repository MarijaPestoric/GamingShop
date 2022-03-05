export function addCartProduct(product) {
    const cartProducts = getCartProducts();

    const currentProduct = cartProducts.find(cartProduct => cartProduct.id === product.id);

    if (!currentProduct) {
        cartProducts.push({
        ...product,
        quantity: 1
      })
    } else {
      currentProduct.quantity++;
    }

    updateCartProducts(cartProducts);
}

export function getCartProducts() {
    const cartProducts = localStorage.getItem("cart_products");
    return cartProducts ? JSON.parse(cartProducts) : [];
}

export function updateCartProducts(products) {
    localStorage.setItem("cart_products", JSON.stringify(products));
}

export function removeCartProduct(product) {
    const cartProducts = getCartProducts();

    let productIndex = null;

    for (let i=0; i<cartProducts.length; i++) {
        if(cartProducts[i].id === product.id) {
            productIndex = i;
            break;
        }
    }

    cartProducts.splice(productIndex,1);
    updateCartProducts(cartProducts);
}

const CartService = {
    addCartProduct,
    getCartProducts,
    updateCartProducts,
    removeCartProduct
};

export default CartService;