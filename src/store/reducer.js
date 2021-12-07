import { CARTMINI, CURRENCY, CATEGORY, ALLCURRENCY, ALLCATEGORY, ADDTOCART, MUTATEQUANTITY, DELETE_ITEM_IN_CART } from './types'

const defaultState = {
    isCartOpen: false,
    currencies: [],
    categories: [],
    selectedCurrency: '',
    selectedCategory: 'all',
    cart: []
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case CARTMINI:
            const result = { ...state, isCartOpen: !state.isCartOpen }
            return result

        case CURRENCY:
            return ({ ...state, selectedCurrency: action.payload.currency })


        case CATEGORY:
            return ({ ...state, selectedCategory: action.payload.tab })


        case ALLCURRENCY:
            return ({ ...state, currencies: action.payload.currencies })


        case ALLCATEGORY:
            return ({ ...state, categories: action.payload.categories })


        case ADDTOCART:
            const isProductInCart = state.cart.find(item => item.id === action.payload.product.id)
            if (isProductInCart) {
                const updatedCart = state.cart.map(item => {
                    if (item.id === isProductInCart.id) {
                        item.selectedOptions = item.selectedOptions.concat(action.payload.product.selectedOptions)
                        item.quantity += 1
                    }
                    return item
                })
                const result = { ...state, cart: updatedCart }
                return result
            }
            else {
                const selectedOptions = [action.payload.product.selectedOptions]
                const updatedCart = state.cart.concat({ ...action.payload.product, quantity: 1, selectedOptions })
                const result = { ...state, cart: updatedCart }
                return result
            }



        case MUTATEQUANTITY:
            if (action.payload.mutationType === 'add') {
                const cartUpdate = state.cart.map(item => {
                    if (item.id === action.payload.productId) {
                        item.selectedOptions = item.selectedOptions.concat(action.payload.newSelectedOption)
                        item.quantity += 1
                    }
                    return item
                })
                const result = { ...state, cart: cartUpdate }
                return result
            }
            else {
                const cartUpdate = state.cart.map(item => {
                    if (item.id === action.payload.productId) {
                        item.selectedOptions = item.selectedOptions.filter((option, optionIndex, arr) => optionIndex !== arr.length - 1)
                        item.quantity -= 1
                    }
                    return item
                })
                const result = { ...state, cart: cartUpdate }
                return result
            }


        case DELETE_ITEM_IN_CART:
            const filteredCart = state.cart.filter(item =>
                item.id !== action.payload.productId

            )
            return { ...state, cart: filteredCart }


        default:
            return state
    }
}

export default reducer

