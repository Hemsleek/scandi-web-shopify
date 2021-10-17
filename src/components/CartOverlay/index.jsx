import React from "react";
import { Title } from "../ProductCard/ProductCardElements";
import {
  BoldText,
  CartItemWrapper,
  CartOverlayWrapper,
  MiniCart,
  SmallText,
  ActionButtons,
  CheckOut,
  CostLabel,
  CostValue,
  TotalCost,
  ViewBag,
  LinkToCart,
} from "./CartOverlayElements";

//Components
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { toggleCart } from "../../store/actions";
import { totalCartAmount } from "../../utils";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const cartItemToShow = this.props.cart.length > 2? this.props.cart.slice(0,2) : this.props.cart
    const currency = this.props.selectedCurrency
    const total = totalCartAmount(this.props.cart,currency).toFixed(2)


    return (
      <CartOverlayWrapper>
        <MiniCart>
          <Title>
            <BoldText>My Bag, </BoldText>
            <SmallText>{this.props.cart.length} items</SmallText>
          </Title>
          <CartItemWrapper>
            {cartItemToShow.map((item, itemIndex) => (
              <CartItem key={`cart-item${itemIndex}`} cartItemId={item.id} />
            ))}
          </CartItemWrapper>
          {this.props.cart.length!==0 && (
            <TotalCost>
              <CostLabel>Total</CostLabel>
              <CostValue>{`${currency} ${total}`}</CostValue>
            </TotalCost>
          )}
          <ActionButtons>
              <LinkToCart onClick={this.props.toggleCart} to='/cart'>
                    <ViewBag>VIEW BAG</ViewBag>
              </LinkToCart>
            <CheckOut>CHECK OUT</CheckOut>
          </ActionButtons>
        </MiniCart>
      </CartOverlayWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  selectedCurrency: state.selectedCurrency

});

const mapDispatchToProps = (dispatch) => ({
    toggleCart:() => dispatch(toggleCart())
  });

export default connect(mapStateToProps, mapDispatchToProps)(index);
