import React from "react";
import { connect } from "react-redux";
import parse from 'html-react-parser'
import { fetchData } from "../../Apollo";
import { PRODUCT_QUERY } from "../../Apollo/queries";
import { addToCart } from "../../store/actions";
import { getPriceInCurrencySelected } from "../../utils";
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
  PDSmallImage,
  PDWrapper,
  SmallSizes,
} from "./ProductDescPage";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    try {
      const productId = this.props.match.params.id;
      const { data } = await fetchData(PRODUCT_QUERY(productId));

      this.setState({ product: data.product });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productData = this.state.product;
    console.log({ productData });
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
    let smallImages= []
    let largeImage = ''
    if(productData.gallery){
      
      smallImages = productData.gallery.length >3 ? productData.gallery.slice(0,3) : productData.gallery
      largeImage = productData.gallery[0]
    }

    console.log({ productData });
    const sizes = "XS,S,M,L".split(",");

    return (
      <PDWrapper>
        <SmallSizes>
          {smallImages
            .map((img, imgIndex) => (
              <PDSmallImage
                src={img}
                key={`Product-Desc-index${imgIndex}`}
                alt="small-image"
              />
            ))}
        </SmallSizes>
        <MainContainer>
          <PDBigImage src={largeImage} alt="big-item-image" />
          <PDDetails>
            <PDName>{productName}</PDName>
            <PDDesc>{productShortDesc}</PDDesc>
            <PDSizes>
              <PDLabel>SIZE:</PDLabel>
              <PDSizesWrapper>
                {sizes.map((size, sizeIndex) => (
                  <PDSize
                    key={`product-description-size${sizeIndex}`}
                    active={size === "S"}
                    disabled={size === "XS"}
                  >
                    {size}
                  </PDSize>
                ))}
              </PDSizesWrapper>
            </PDSizes>
            <PDPrice>
              <PDPriceLabel>PRICE:</PDPriceLabel>
              <PDPriceValue>{productData.prices && `${price.currency} ${price.amount}`}</PDPriceValue>
            </PDPrice>
            <PDButton onClick={() => this.props.addToCart(productData)}>
              ADD TO CART
            </PDButton>
            <PDInfo>
              
              {productData.description ? parse(productData.description) : ""}
            </PDInfo>
          </PDDetails>
        </MainContainer>
      </PDWrapper>
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
