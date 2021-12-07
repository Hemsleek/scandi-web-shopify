import React from "react";
import { connect } from "react-redux";
import { deleteCartItem, mutateProductQantity } from "../../store/actions";
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
} from "./CartItemElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOption: 0,
      setImage: { img: "", active: 0 },
      selectedOptions: {},
      item: {},
    };

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleOptionSet = this.handleOptionSet.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
  }

  componentDidMount() {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
    const activeOption = item.selectedOptions.length - 1;

    const selectedOptions = item.selectedOptions[activeOption];

    this.setState({
      setImage: { img: item.gallery[0], active: 0 },
      selectedOptions,
      item,
      activeOption,
    });
  }

  componentDidUpdate(prevProps) {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);

    if (this.state.activeOption !== item.selectedOptions.length - 1) {
      const activeOption = item.selectedOptions.length - 1;

      const selectedOptions = item.selectedOptions[activeOption];

      this.setState({
        selectedOptions,
        activeOption,
      });
    }

    if (prevProps.cart.length !== this.props.cart.length) {
      const activeOption = item.selectedOptions.length - 1;

      const selectedOptions = item.selectedOptions[activeOption];

      this.setState({
        setImage: { active: 0, img: item.gallery[0] },
        selectedOptions,
        item,
        activeOption,
      });
    }
  }

  handleOptionSet(name, item) {
    this.setState((currentState) => ({
      selectedOptions: {
        ...currentState.selectedOptions,
        [name]: item,
      },
    }));
  }

  handleQuantityChange(mutationType, item) {
    const { id, quantity, name } = item;

    if (mutationType === "remove" && quantity === 1) {
      this.handleCartItemDelete(id, name);
      return null;
    }
    const addItem = mutationType === "add" ? this.state.selectedOptions : {};
    this.props.mutateQuantity(mutationType, id, addItem);
  }

  handleImageChange(gallery, type) {
    const active = this.state.setImage.active;
    if (type === "next" && active !== gallery.length - 1) {
      this.setState({
        setImage: { img: gallery[active + 1], active: active + 1 },
      });
      return null;
    }
    if (type === "previous" && active !== 0) {
      this.setState({
        setImage: { img: gallery[active - 1], active: active - 1 },
      });
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
    const item = this.state.item;
    const nameArr = String(item.name).split(" ");
    const productName = nameArr.length > 3 ? nameArr[0] : nameArr.join(" ");
    const productShortDesc =
      nameArr.length > 3 ? nameArr.slice(1).join(" ") : "";

    const selectedOptionToShow = this.state.selectedOptions;
    const showItem = Object.keys(item).length !== 0;
    const showAttributes = Object.keys(selectedOptionToShow).length !== 0;

    const price = showItem
      ? getPriceInCurrencySelected(item.prices, this.props.currency)
      : {};

    return (
      <>
        {showItem ? (
          <CartItemContainer large={this.props.large}>
            <CardDetails large={this.props.large}>
              <ItemName large={this.props.large}>{productName}</ItemName>
              <ItemDesc>{productShortDesc}</ItemDesc>
              <ItemPrice
                large={this.props.large}
              >{`${price.currency} ${price.amount}`}</ItemPrice>
              {showAttributes &&
                item.attributes.map((attribute) => (
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
                        onClick={() => this.handleOptionSet(attribute.name, i)}
                        swatchActive={checkSwatchType(
                          attribute,
                          i,
                          selectedOptionToShow
                        )}
                        active={
                          i.displayValue ===
                          selectedOptionToShow[attribute.name].displayValue
                        }
                      >
                        {renderAttributeValue(this.props.large, attribute, i)}
                      </Size>
                    ))}
                  </Sizes>
                ))}
            </CardDetails>

            <ItemDisplayContainer>
              <ItemQuantityWrapper>
                <AddButton
                  onClick={() => this.handleQuantityChange("add", item)}
                  large={this.props.large}
                >
                  +
                </AddButton>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <MinusButton
                  onClick={() => this.handleQuantityChange("remove", item)}
                  large={this.props.large}
                >
                  -
                </MinusButton>
              </ItemQuantityWrapper>
              <ItemDisplay>
                <ChevronArrowLeft
                  onClick={() =>
                    this.handleImageChange(item.gallery, "previous")
                  }
                  src="/assets/vectors/arrow.svg"
                  alt="chevron-arrow"
                />
                <ChevronArrow
                  onClick={() => this.handleImageChange(item.gallery, "next")}
                  src="/assets/vectors/arrow.svg"
                  alt="chevron-arrow"
                />
                <ItemImage src={this.state.setImage.img} alt="cart-item-img" />
              </ItemDisplay>
            </ItemDisplayContainer>
          </CartItemContainer>
        ) : (
          []
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId, newSelectedOption) =>
    dispatch(mutateProductQantity(mutationType, productId, newSelectedOption)),
  deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
