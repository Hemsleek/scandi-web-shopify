import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import opusClient from "../../OPUS";
import { CATEGORY_QUERY } from "../../OPUS/queries";

// components
import ProductCard from "../../components/ProductCard/index";
import { ProductWrapper, Title } from "./HomeElements";
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {},
    };
  }

  async componentDidMount() {
    try {
      if (this.props.selectedCategory) {
        const { category } = await opusClient.post(
          CATEGORY_QUERY(this.props.selectedCategory)
        );

        this.setState({ category });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    try {
      if (prevProps.selectedCategory !== this.props.selectedCategory) {
        const { category } = await opusClient.post(
          CATEGORY_QUERY(this.props.selectedCategory)
        );
        this.setState({ category });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productsToShow = this.state.category.products || [];

    return (
      <Fragment>
        <Title>{this.props.selectedCategory}</Title>
        <ProductWrapper>
          {productsToShow.map((product, productIndex) => (
            <ProductCard
              key={`category-product-index${productIndex}`}
              productData={product}
              history={this.props.history}
            />
          ))}
        </ProductWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
});

export default connect(mapStateToProps, null)(index);
