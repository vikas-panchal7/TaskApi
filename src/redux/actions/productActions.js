export const addProductAction = (product) => {
    return {
        type: 'ADD_TO_STORE',
        payload: product,
    };
};
