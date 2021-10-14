import React, { Component } from "react";
import {
  ProductWrapper,
  Image,
  PrdImgWrapper,
  CartImg,
  PrdContent,
  Title,
  Price
} from "./ProductCardElements";

export default class ProductCard extends Component {
  render() {
    return (
      <ProductWrapper>
        <PrdImgWrapper>

          <CartImg src="/assets/vectors/green-cart.svg" alt='green-cart' />
          <Image src="/assets/images/cat-image.png"  alt="product-image"/>
        </PrdImgWrapper>
        <PrdContent>
          <Title>Apollo Running Short</Title>
          <Price>$50.00</Price>
        </PrdContent>
      </ProductWrapper>
    );
  }
}
