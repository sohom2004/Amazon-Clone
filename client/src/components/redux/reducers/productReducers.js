const products = [];

export const ProductReducers = (state={products}, action)=>{
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return {products: action.payload}

        case "GET_PRODUCTS_FAILURE":
            return {products: action.payload}
    
        default: return state
    }
}