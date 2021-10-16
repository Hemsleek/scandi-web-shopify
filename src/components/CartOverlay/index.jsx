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

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const cartItemToShow = this.props.cart.length > 2? this.props.cart.slice(0,2) : this.props.cart


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
              <CostValue>$100</CostValue>
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

});

const mapDispatchToProps = (dispatch) => ({
    toggleCart:() => dispatch(toggleCart())
  });

export default connect(mapStateToProps, mapDispatchToProps)(index);
