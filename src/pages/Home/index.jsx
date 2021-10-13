import React, { Component, Fragment } from "react";

// components
import ProductCard from "../../components/ProductCard/index";
import { ProductWrapper, Title } from "./HomeElements";
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Title>Category name</Title>
        <ProductWrapper>
          {Array(6)
            .fill(" ")
            .map((product, productIndex) => (
              <ProductCard key={`category-product-index${productIndex}`} />
            ))}
        </ProductWrapper>
      </Fragment>
    );
  }
}
