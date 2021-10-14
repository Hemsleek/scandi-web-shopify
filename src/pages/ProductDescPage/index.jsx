import React from "react";
import { MainContainer, PDBigImage, PDButton, PDDesc, PDDetails, PDInfo, PDLabel, PDName, PDPrice, PDPriceLabel, PDPriceValue, PDSize, PDSizes, PDSizesWrapper, PDSmallImage, PDWrapper, SmallSizes } from "./ProductDescPage";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const sizes = "XS,S,M,L".split(",");

    return (
      <PDWrapper>
        <SmallSizes>
          {Array(3)
            .fill(" ")
            .map((item, itemIndex) => (
              <PDSmallImage
                src="/assets/images/small-pd-img.png"
                key={`Product-Desc-index${itemIndex}`}
                alt="small-image"
              />
            ))}
        </SmallSizes>
        <MainContainer>
          <PDBigImage src='/assets/images/PD-img.png' alt="big-item-image" />
          <PDDetails>
            <PDName>Apollo</PDName>
            <PDDesc>Running Short</PDDesc>
            <PDSizes>
              <PDLabel>SIZE:</PDLabel>
              <PDSizesWrapper>
                {sizes.map((size, sizeIndex) => (
                  <PDSize key={`product-description-size${sizeIndex}`} active={size==='S'} disabled={size=== 'XS'}>{size}</PDSize>
                ))}
              </PDSizesWrapper>
            </PDSizes>
            <PDPrice>
              <PDPriceLabel>PRICE:</PDPriceLabel>
              <PDPriceValue>$50.00</PDPriceValue>
            </PDPrice>
            <PDButton>ADD TO CART</PDButton>
            <PDInfo>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </PDInfo>
          </PDDetails>
        </MainContainer>
      </PDWrapper>
    );
  }
}

export default index;
