import { CARTMINI, CATEGORY, CURRENCY,ALLCURRENCY, ALLCATEGORY, ADDTOCART, MUTATEQUANTITY } from "./types";


export const toggleCart = () => ({
    type:CARTMINI
})

export const changeCurrency = (currency) => ({
    type:CURRENCY,
    payload:{
        currency
    }
})

export const setCategory = (tab) => ({
    type:CATEGORY,
    payload:{
        tab
    }
})

export const setAllCategory = (categories) => ({
    type:ALLCATEGORY,
    payload:{
        categories
    }
})

export const setCurrencies = (currencies) => ({
    type:ALLCURRENCY,
    payload:{
        currencies
    }
})

export const addToCart = (product) => ({
    type:ADDTOCART,
    payload:{
        product
    }
})

export const mutateProductQantity = (mutationType,productId) => ({
    type:MUTATEQUANTITY,
    payload:{
        mutationType,
        productId
    }
})

