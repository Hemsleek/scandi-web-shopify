import React from "react";
import { connect } from "react-redux";
import { mutateProductQantity } from "../../store/actions";
import {
  AddButton,
  CardDetails,
  CartItemContainer,
  ItemImage,
  ItemDesc,
  ItemDisplay,
  ItemDisplayContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemQuantityWrapper,
  MinusButton,
  Size,
  Sizes,
  SizeM,
  ChevronArrow,
  ChevronArrowLeft,
} from "./CartItemElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CartItemContainer large={this.props.large}>
        <CardDetails large={this.props.large}>
          <ItemName large={this.props.large}>Apollo</ItemName>
          <ItemDesc>Running Short</ItemDesc>
          <ItemPrice large={this.props.large}>$50.00</ItemPrice>
          <Sizes large={this.props.large}>
            <Size large={this.props.large}>S</Size>
            <SizeM large={this.props.large}>M</SizeM>
          </Sizes>
        </CardDetails>
        <ItemDisplayContainer>
          <ItemQuantityWrapper>
            <AddButton large={this.props.large}>+</AddButton>
            <ItemQuantity>1</ItemQuantity>
            <MinusButton large={this.props.large}>-</MinusButton>
          </ItemQuantityWrapper>
          <ItemDisplay>
            <ChevronArrowLeft
              src="/assets/vectors/arrow.svg"
              alt="chevron-arrow"
            />
            <ChevronArrow src="/assets/vectors/arrow.svg" alt="chevron-arrow" />
            <ItemImage src="/assets/images/cart-item.png" alt="cart-item" />
          </ItemDisplay>
        </ItemDisplayContainer>
      </CartItemContainer>
    );
  }
}

const mapStateToProps = (state) => ({
//   cart:state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId) =>
    dispatch(mutateProductQantity(mutationType, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
