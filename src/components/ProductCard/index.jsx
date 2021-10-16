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

import {getPriceInCurrencySelected, setAtrributesDefault} from '../../utils'
import { addToCart } from "../../store/actions";

class ProductCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category:{}
    };
    this.handleProductDetails = this.handleProductDetails.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
  }

  addItemToCart(){
    const productToAdd = {
      ...this.props.productData,
      selectedOptions:setAtrributesDefault(this.props.productData)
    }
  
    this.props.addToCart(productToAdd)
  }

  handleProductDetails(e){
    if(e.target.alt === 'green-cart') return null

    const {inStock , id} = this.props.productData
    if(!inStock) return null
    const {history} = this.props
    history.push(`/product/${id}`)
  }

  render() {
      const selectedCurrency = this.props.currency
      const item = this.props.productData
      const imgDisplay = item.gallery.length? item.gallery[0]: "/assets/images/cat-image.png"
      const price= getPriceInCurrencySelected(item.prices,selectedCurrency)

    return (
      <ProductWrapper outOfStock={!item.inStock} onClick={(e) => this.handleProductDetails(e)}>
        <PrdImgWrapper outOfStock={!item.inStock}>

          <CartImg src="/assets/vectors/green-cart.svg" alt='green-cart' onClick={this.addItemToCart} />
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

const mapDispatchToProps = (dispatch) => ({
  addToCart:(product) => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)