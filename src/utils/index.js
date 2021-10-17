
export const getPriceInCurrencySelected = (prices, selectedCurrency) =>{
    let price = prices.find(price => price.currency === selectedCurrency)
    if(!price) price = {currency:'', amount:''}

    return price

} 

export const setAtrributesDefault=(product) => {
    const selectedOptions = {}
    const {attributes} = product

    attributes.forEach( attribute => {
        selectedOptions[attribute.name] = attribute.items.length>0 ? attribute.items[0] : null
    })


    return selectedOptions
}

export const totalCartAmount = (cartItems,selectedCurrency) => {
    
    return cartItems.reduce((acc,item) => {
        const price = item.prices.find(price => price.currency === selectedCurrency).amount
        const itemAmount = item.quantity * price
        return acc + itemAmount
    },0)
}
