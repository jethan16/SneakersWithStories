import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/types";

const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    products: {
        Hoodie: {
            name: "Black SNKRS Logo Hoodie",
            price: 50.00,
            numbers: 0,
            inCart: false,
            image: "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/Hoodie.png"
        },
        LongT: {
            name: "Black SNKRS Logo Long-T",
            price: 30.00,
            numbers: 0,
            inCart: false,
            image: "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/LS_TShirt.png"
        },
        ShortT: {
            name: "Black SNKRS Logo Short-T",
            price: 20.00,
            numbers: 0,
            inCart: false,
            image: "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/TShirt.png"
        },
        Stickers: {
            name: "Green SNKRS Logo Stickers",
            price: 10.00,
            numbers: 0,
            inCart: false,
            image: "https://sneakers-with-stories.s3.us-east-2.amazonaws.com/web-opt/Stickers.png"
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_CART:
            let addQuantity  = { ...state.products[action.payload]}

            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
             
            return {
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_CART:
            return {
                ...state
            }    
        default:
            return state;
    }
}