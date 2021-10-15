
export const getPriceInCurrencySelected = (prices, selectedCurrency) =>{
    let price = prices.find(price => price.currency[0] === selectedCurrency)
    if(!price) price = {currency:'', amount:''}

    return price

} 
