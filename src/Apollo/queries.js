import { gql } from '@apollo/client'

export const ALL_CURRENCY = gql`
    query{
        currencies
    }
   
`

export const ALL_CATEGORY = gql`
     query {
        categories{
            name
        }
    }
`

export const CATEGORY_QUERY = (title) => {

    return gql`
            query{
                category(input:{title:"${title}"}){
                    name
                    products{
                        id
                        name
                        inStock
                        gallery
                        description
                        category
                        attributes{
                            id
                            name
                            type
                            items{
                                id
                                displayValue
                                value
                            }
                        }
                        prices{
                            currency
                            amount
                        }
                        brand
                    }
                }
        }
        `
}

export const PRODUCT_QUERY = (productId) => {

    return gql`
        query{
            product(id:"${productId}"){
                        id
                        name
                        inStock
                        gallery
                        description
                        category
                        brand
                        attributes{
                            id
                            name
                            type
                            items{
                                id
                                displayValue
                                value
                            }
                        }
                        prices{
                            currency
                            amount
                        }
                        brand
            }
        }
    `
}