import { Query, Field } from '@tilework/opus';

// fields

const productFields = 'id,name,inStock,gallery,description,category,brand'.split(',')
const attributeFileds = 'id,name,type'.split(',')


//Queries

export const ALL_CURRENCY = new Query('currencies', true)


export const ALL_CATEGORY = new Query('categories', true)
    .addFieldList(['name'])



export const CATEGORY_QUERY = (title) => new Query('category')
    .addArgument('input', 'CategoryInput', { title })
    .addFieldList(['name'])
    .addField(new Field('products', true)
        .addFieldList(productFields)
        .addField(new Field('attributes')
            .addFieldList(attributeFileds)
            .addField(new Field('items', true)
                .addFieldList(['id', 'displayValue', 'value'])
            )
        )
        .addField(new Field('prices')
            .addFieldList(['currency', 'amount'])
        )
    )



export const PRODUCT_QUERY = (productId) => new Query('product')
    .addArgument('id', 'String!', productId)
    .addFieldList(productFields)
    .addField(new Field('attributes')
        .addFieldList(attributeFileds)
        .addField(new Field('items', true)
            .addFieldList(['id', 'displayValue', 'value'])
        )
    )
    .addField(new Field('prices')
        .addFieldList(['currency', 'amount'])
    )

