
export const getPriceInCurrencySelected = (prices, selectedCurrency) =>{
    let price = prices.find(price => price.currency === selectedCurrency)
    if(!price) price = {currency:'', amount:''}

    return price

} 
