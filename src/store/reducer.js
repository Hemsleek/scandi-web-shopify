import {CARTMINI, CURRENCY, CATEGORY} from './types'

const defaultState = {
    isCartOpen:false,
    currency:'$',
    tabs: "Women,Men,Kids".split(","),
    selectedCategory:'Women'
}

const reducer = (state = defaultState,action) => {
    let result;

        switch(action.type){

            case CARTMINI:
                result={...state,isCartOpen:!state.isCartOpen}
                break;
            
            case CURRENCY:
                result={...state,currency:action.payload.currency}
                break;

            case CATEGORY:
                result={...state, selectedCategory:action.payload.tab}
                break;
                
            default:
                result=state
                break;
        }
    return result
}

export default reducer

