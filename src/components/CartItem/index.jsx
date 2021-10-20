import React from "react";
import { connect } from "react-redux";
import {
  changeCartSelectedOption,
  deleteCartItem,
  mutateProductQantity,
} from "../../store/actions";
import { getPriceInCurrencySelected } from "../../utils";
import {
  renderAttributeValue,
  checkSwatchType,
  itemsRender,
} from "../../utils/helpers";
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
  ChevronArrow,
  ChevronArrowLeft,
  RemoveButton,
  CardDetailsWrapper,
} from "./CartItemElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setImage: "",
    };

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleOptionSet = this.handleOptionSet.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
  }

  componentDidMount() {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
    this.setState({ setImage: item.gallery[0] });
  }

  handleOptionSet(productId, name, item) {
    this.props.changeCartSelectedOption(productId, name, item);
  }

  handleQuantityChange(mutationType, id, quantity) {
    if (mutationType === "remove" && quantity === 1) return null;
    this.props.mutateQuantity(mutationType, id);
  }

  handleImageChange(gallery, type) {
    const indexOfUrl = gallery.indexOf(this.state.setImage);
    if (type === "next" && indexOfUrl !== gallery.length - 1) {
      this.setState({ setImage: gallery[indexOfUrl + 1] });
      return null;
    }
    if (type === "previous" && indexOfUrl !== 0) {
      this.setState({ setImage: gallery[indexOfUrl - 1] });
      return null;
    }
  }

  handleCartItemDelete(productId, productName) {
    if (
      window.confirm(
        `Are you sure you want to remove item '${productName}' from cart?`
      )
    )
      this.props.deleteCartItem(productId);
  }

  render() {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
    const nameArr = String(item.name).split(" ");
    const productName = nameArr.length > 3 ? nameArr[0] : nameArr.join(" ");
    const productShortDesc =
      nameArr.length > 3 ? nameArr.slice(1).join(" ") : "";

    const price = getPriceInCurrencySelected(item.prices, this.props.currency);

    return (
      <CartItemContainer large={this.props.large}>
        <CardDetailsWrapper>
        <CardDetails large={this.props.large}>
          <ItemName large={this.props.large}>{productName}</ItemName>
          <ItemDesc>{productShortDesc}</ItemDesc>
          <ItemPrice
            large={this.props.large}
          >{`${price.currency} ${price.amount}`}</ItemPrice>
          {item.attributes.map((attribute) => (
            <Sizes
              key={`cart-attribute-index${attribute.id}`}
              large={this.props.large}
            >
              {itemsRender(this.props.large, attribute.items).map((i) => (
                <Size
                  large={this.props.large}
                  key={`cart-item-index${i.id}`}
                  style={
                    attribute.type === "swatch"
                      ? { backgroundColor: i.value }
                      : {}
                  }
                  onClick={() =>
                    this.handleOptionSet(item.id, attribute.name, i)
                  }
                  swatchActive={checkSwatchType(
                    attribute,
                    i,
                    item.selectedOptions
                  )}
                  active={
                    i.displayValue ===
                    item.selectedOptions[attribute.name].displayValue
                  }
                >
                  {renderAttributeValue(this.props.large, attribute, i)}
                </Size>
              ))}
            </Sizes>
          ))}
          
        </CardDetails>
        <RemoveButton
            large={this.props.large}
            onClick={() => this.handleCartItemDelete(item.id, item.name)}
          >
            Remove
          </RemoveButton>
        </CardDetailsWrapper>
        <ItemDisplayContainer>
          <ItemQuantityWrapper>
            <AddButton
              onClick={() =>
                this.handleQuantityChange("add", item.id, item.quantity)
              }
              large={this.props.large}
            >
              +
            </AddButton>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <MinusButton
              onClick={() =>
                this.handleQuantityChange("remove", item.id, item.quantity)
              }
              large={this.props.large}
              disabled={item.quantity === 1}
            >
              -
            </MinusButton>
          </ItemQuantityWrapper>
          <ItemDisplay>
            <ChevronArrowLeft
              onClick={() => this.handleImageChange(item.gallery, "previous")}
              src="/assets/vectors/arrow.svg"
              alt="chevron-arrow"
            />
            <ChevronArrow
              onClick={() => this.handleImageChange(item.gallery, "next")}
              src="/assets/vectors/arrow.svg"
              alt="chevron-arrow"
            />
            <ItemImage src={this.state.setImage} alt="cart-item" />
          </ItemDisplay>
        </ItemDisplayContainer>
      </CartItemContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId) =>
    dispatch(mutateProductQantity(mutationType, productId)),
  changeCartSelectedOption: (productId, name, item) =>
    dispatch(changeCartSelectedOption(productId, name, item)),
  deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
