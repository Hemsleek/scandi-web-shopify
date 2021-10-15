import React, { Component } from "react";
import { connect } from "react-redux";

import {
  ProductWrapper,
  Image,
  PrdImgWrapper,
  CartImg,
  PrdContent,
  Title,
  Price
} from "./ProductCardElements";

import {getPriceInCurrencySelected} from '../../utils'

class ProductCard extends Component {

  render() {
      const selectedCurrency = this.props.currency
      const item = this.props.productData
      const imgDisplay = item.gallery.length? item.gallery[0]: "/assets/images/cat-image.png"
      const price= getPriceInCurrencySelected(item.prices,selectedCurrency)

    return (
      <ProductWrapper outOfStock={!item.inStock}>
        <PrdImgWrapper outOfStock={!item.inStock}>

          <CartImg src="/assets/vectors/green-cart.svg" alt='green-cart' />
          <Image src={imgDisplay}  alt="product-image"/>
        </PrdImgWrapper >
        <PrdContent>
          <Title>{item.name}</Title>
          <Price>{`${price.currency} ${price.amount}`}</Price>
        </PrdContent>
      </ProductWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency:state.selectedCurrency,
  
})

export default connect(mapStateToProps, null)(ProductCard)