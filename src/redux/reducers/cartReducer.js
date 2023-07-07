const initialState = {
    products: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
