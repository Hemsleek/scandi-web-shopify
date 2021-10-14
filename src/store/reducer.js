const defaultState = {
    isCartOpen:false,
    currency:'$',
    selectedCategory:'Women'
}

const reducer = (state = defaultState,action) => {
    let result;

        switch(action.type){

            default:
                result=state
                break;
        }
    return result
}

export default reducer

