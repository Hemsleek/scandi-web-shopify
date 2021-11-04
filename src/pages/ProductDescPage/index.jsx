import React from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import opusClient from "../../OPUS";
import { PRODUCT_QUERY } from "../../OPUS/queries";
import { addToCart } from "../../store/actions";
import { getPriceInCurrencySelected, setAtrributesDefault } from "../../utils";
import {
  MainContainer,
  PDBigImage,
  PDButton,
  PDDesc,
  PDDetails,
  PDInfo,
  PDLabel,
  PDName,
  PDPrice,
  PDPriceLabel,
  PDPriceValue,
  PDSize,
  PDSizes,
  PDSizesWrapper,
  PDSmallContainer,
  PDSmallImage,
  PDWrapper,
  SmallSizes,
} from "./ProductDescPage";

import { checkSwatchType } from "../../utils/helpers";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      selectedOptions: {},
      selectedSmallImage: 0,
    };
    this.handleOptionSet = this.handleOptionSet.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  handleOptionSet(name, item) {
    this.setState((currentState) => ({
      selectedOptions: {
        ...currentState.selectedOptions,
        [name]: item,
      },
    }));
  }

  addItemToCart() {
    const productToAdd = {
      ...this.state.product,
      selectedOptions: this.state.selectedOptions,
    };
    this.props.addToCart(productToAdd);
  }

  async componentDidMount() {
    try {
      const productId = this.props.match.params.id;
      var { product } = await opusClient.post(PRODUCT_QUERY(productId));

      this.setState({
        product,
        selectedOptions: setAtrributesDefault(product),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productData = this.state.product;
    const isDataFetched = Object.keys(productData).length;

    const nameArr = String(productData.name).split(" ");
    const productName = nameArr.length > 3 ? nameArr[0] : nameArr.join(" ");
    const productShortDesc =
      nameArr.length > 3 ? nameArr.slice(1).join(" ") : "";
    let price = {};

    if (productData.prices) {
      price = getPriceInCurrencySelected(
        productData.prices,
        this.props.currency
      );
    }

    let smallImages = [];
    let largeImage = "";
    if (productData.gallery) {
      smallImages =
        productData.gallery.length > 3
          ? productData.gallery.slice(0, 3)
          : productData.gallery;
      largeImage = productData.gallery[this.state.selectedSmallImage];
    }

    return (
      <>
        {isDataFetched !== 0 && (
          <PDWrapper>
            <SmallSizes>
              {smallImages.map((img, imgIndex) => (
                <PDSmallContainer
                  onClick={() =>
                    this.setState({ selectedSmallImage: imgIndex })
                  }
                  selected={imgIndex === this.state.selectedSmallImage}
                  key={`Product-Desc-index${imgIndex}`}
                >
                  <PDSmallImage src={img} alt="small-image" />
                </PDSmallContainer>
              ))}
            </SmallSizes>
            <MainContainer>
              <PDBigImage src={largeImage} alt="big-item-image" />
              <PDDetails>
                <PDName>{productName}</PDName>
                <PDDesc>{productShortDesc}</PDDesc>
                {productData.attributes.map((attribute) => (
                  <PDSizes key={`product-attribute-${attribute.id}`}>
                    <PDLabel>{attribute.name}:</PDLabel>
                    <PDSizesWrapper>
                      {attribute.items.map((item) => (
                        <PDSize
                          key={`product-description-size${item.id}`}
                          onClick={() =>
                            this.handleOptionSet(attribute.name, item)
                          }
                          style={
                            attribute.type === "swatch"
                              ? { backgroundColor: item.value }
                              : {}
                          }
                          swatchActive={checkSwatchType(
                            attribute,
                            item,
                            this.state.selectedOptions
                          )}
                          active={
                            item.displayValue ===
                            this.state.selectedOptions[attribute.name]
                              .displayValue
                          }
                          disabled={item.displayValue === "XS"}
                        >
                          {attribute.type !== "swatch" &&
                            (attribute.name === "Size"
                              ? item.value
                              : item.displayValue)}
                        </PDSize>
                      ))}
                    </PDSizesWrapper>
                  </PDSizes>
                ))}
                <PDPrice>
                  <PDPriceLabel>PRICE:</PDPriceLabel>
                  <PDPriceValue>
                    {`${price.currency} ${price.amount}`}
                  </PDPriceValue>
                </PDPrice>
                <PDButton
                  disabled={!productData.inStock}
                  outOfStock={productData.inStock}
                  onClick={this.addItemToCart}
                >
                  ADD TO CART
                </PDButton>
                <PDInfo>{parse(productData.description)}</PDInfo>
              </PDDetails>
            </MainContainer>
          </PDWrapper>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
