import {CARTMINI, CURRENCY, CATEGORY, ALLCURRENCY, ALLCATEGORY, ADDTOCART, MUTATEQUANTITY} from './types'

const defaultState = {
    isCartOpen:false,
    currencies:[],
    categories:[], 
    selectedCurrency:'',
    selectedCategory:'',
    cart:[]
}

const reducer = (state = defaultState,action) => {
    let result;

        switch(action.type){

            case CARTMINI:
                result={...state,isCartOpen:!state.isCartOpen}
                break;
            
            case CURRENCY:
                result={...state,selectedCurrency:action.payload.currency}
                break;

            case CATEGORY:
                result={...state, selectedCategory:action.payload.tab}
                break;

            case ALLCURRENCY:
                result = {...state,currencies:action.payload.currencies}
                break;

            case ALLCATEGORY:
                result = {...state,categories:action.payload.categories}
                break;

                case ADDTOCART:
                    let updatedCart=[]
                    const isProductInCart = state.cart.find(item => item.id===action.payload.product.id)
                    if(isProductInCart) {
                        updatedCart = state.cart.map(item => {
                            if(item.id === isProductInCart.id) item.quantity+=1
                            return item
                        })
                    }  
                    else{
                        updatedCart = state.cart.concat({...action.payload.product,quantity:1})
                    }

                    result = {...state,cart:updatedCart}
                    break;

                case MUTATEQUANTITY:
                    let cartUpdate=[]
                    if(action.payload.mutationType==='add'){
                        cartUpdate= state.cart.map(item => {
                            if(item.id === action.payload.productId) item.quantity+=1
                            return item
                        })
                    }
                    else{
                        cartUpdate= state.cart.map(item => {
                            if(item.id === action.payload.productId) item.quantity-=1
                            return item
                        })
                    }
                    result={...state,cart:cartUpdate}
                    break;


            default:
                result=state
                break;
        }
    return result
}

export default reducer

