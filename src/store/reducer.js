import {CARTMINI, CURRENCY, CATEGORY, ALLCURRENCY, ALLCATEGORY, ADDTOCART} from './types'

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
                    result = {...state,cart:state.cart.concat(action.payload.product)}
                    break;

            default:
                result=state
                break;
        }
    return result
}

export default reducer

