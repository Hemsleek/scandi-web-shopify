import { CARTMINI, CATEGORY, CURRENCY } from "./types";


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
