import {CARTMINI, CURRENCY, CATEGORY, ALLCURRENCY, ALLCATEGORY} from './types'

const defaultState = {
    isCartOpen:false,
    currencies:[],
    categories:[], 
    selectedCurrency:'',
    selectedCategory:'',
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


            default:
                result=state
                break;
        }
    return result
}

export default reducer

