const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_STORE':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
