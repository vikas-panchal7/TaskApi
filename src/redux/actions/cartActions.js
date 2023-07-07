export const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
export const removeFromCartAction = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    };
};