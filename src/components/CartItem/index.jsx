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
} from "./CartItemElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setImage: "",
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
    const selectedOptions = item.selectedOptions.length
      ? item.selectedOptions[item.activeOptionIndex]
      : {};
    this.setState({
      setImage: item.gallery[0],
      selectedOptions,
      item,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.cart.length === this.props.cart.length) {
    //   const checkChange = prevProps.cart.some(
    //     (item) =>
    //       item.activeOptionIndex !==
    //       this.props.cart.find((i) => i.id === item.id).activeOptionIndex
    //   );
    console.log({ previousItem: prevState.item, nextItem: this.state.item });
    // }
    // console.log({
    //   currentCArt: this.props.cart,
    //   preCart: prevProps.cart,
    //   // Nitem: State.item,
    //   currItem: this.state.item,
    // });
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
    console.log({
      previous: item.previousOptionIndex,
      active: item.activeOptionIndex,
    });

    if (prevProps.cart.length !== this.props.cart.length) {
      // const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
      console.log("hereeee");
      const selectedOptions = item.selectedOptions.length
        ? item.selectedOptions[item.activeOptionIndex]
        : {};
      this.setState({
        setImage: item.gallery[0],
        selectedOptions,
        item,
      });
    }

    // const checkActiveOptionChange = this.props.cart.reduce(
    //   (acc, i, itemIndex) => {
    //     console.log({ quantity: i.quantity, index: i.activeOptionIndex });
    //     const p = this.state.item;
    //     console.log({ pQ: p.quantity, pI: p.activeOptionIndex });
    //     if (acc) return acc;
    //     return (
    //       i.id === prevProps.cart[itemIndex].id &&
    //       i.activeOptionIndex !== prevProps.cart[itemIndex].activeOptionIndex
    //     );
    //   },
    //   false
    // );

    // console.log({
    //   quantity: item.selectedOptions.length,
    //   index: item.activeOptionIndex,
    // });

    // const p = prevProps.cart.find((i) => i.id === item.id);
    // console.log({ pQ: p.selectedOptions.length, pI: p.activeOptionIndex });

    // const checkActiveOptionChange = false;
    // console.log(checkActiveOptionChange);
    // if (checkActiveOptionChange) {
    //   this.setState({
    //     selectedOptions: item.activeOptionIndex,
    //   });
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log({
    //   currentCart: this.props.cart[0],
    //   nextCart: nextProps.cart[0],
    //   Nitem: nextState.item,
    //   currItem: this.state.item,
    // });
    console.log({
      updatedItem: this.props.cart[0],
      // nextCart: nextProps.cart[0],
      // Nitem: nextState.item,
      Item: this.state.item,
    });
    if (nextProps.cart.length === this.props.cart.length) {
      const checkChange = nextProps.cart.some(
        (item) =>
          item.activeOptionIndex !==
          this.props.cart.find((i) => i.id === item.id).activeOptionIndex
      );
      // console.log({ checkChange });
    }
    return true;
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
    // const updatedItem = this.props.cart.find(
    //   (i) => i.id === this.props.cartItemId
    // );
    // const UpdatedSelectedOptions = updatedItem.selectedOptions;

    // // this.setState({
    //   selectedOptions: UpdatedSelectedOptions[updatedItem.activeOptionIndex],
    // });
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
                <ItemImage src={this.state.setImage} alt="cart-item" />
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
  changeCartSelectedOption: (productId, name, item) =>
    dispatch(changeCartSelectedOption(productId, name, item)),
  deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
