import React, { Fragment } from "react";
import { CartTitle, CWrapper, EmptyCart } from "./CartElements";

// Component
import CartItem from "../../components/CartItem";
import { mutateProductQantity } from "../../store/actions";
import { connect } from "react-redux";

class index extends React.Component {
  render() {
    return (
      <Fragment>
        <CartTitle>CART</CartTitle>
        <CWrapper>
          {!this.props.cart.length && <EmptyCart>No Item in Cart</EmptyCart>}
          {this.props.cart.map((item, itemIndex) => (
            <CartItem
              key={`cart-page-item${itemIndex}`}
              cartItemId={item.id}
              large
            />
          ))}
        </CWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId) =>
    dispatch(mutateProductQantity(mutationType, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
