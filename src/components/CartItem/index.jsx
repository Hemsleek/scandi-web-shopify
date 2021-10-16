import React from "react";
import { connect } from "react-redux";
import { mutateProductQantity } from "../../store/actions";
import { getPriceInCurrencySelected } from "../../utils";
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

    this.state = {
        setImage:''
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }



  handleQuantityChange(mutationType,id,quantity) {
    if (mutationType === "remove" && quantity === 1) return null;
    this.props.mutateQuantity(mutationType,id)
  }

  handleImageChange(gallery, type){
      const indexOfUrl = gallery.indexOf(this.state.setImage)
        if(type==='next' && indexOfUrl !== gallery.length - 1){
            this.setState({setImage:gallery[indexOfUrl+1]})
            return null
        }
        if(type==='previous' && indexOfUrl !== 0){
            this.setState({setImage:gallery[indexOfUrl-1]})
            return null

        }

  }

  componentDidMount(){
    const item = (this.props.cart).find(i => i.id===this.props.cartItemId);
    this.setState({setImage:item.gallery[0]})

  }

  render() {
    const item = (this.props.cart).find(i => i.id===this.props.cartItemId);
    console.log({item})
    const nameArr = String(item.name).split(" ");
    const productName = nameArr.length > 3 ? nameArr[0] : nameArr.join(" ");
    const productShortDesc =
      nameArr.length > 3 ? nameArr.slice(1).join(" ") : "";

    const price = getPriceInCurrencySelected(item.prices, this.props.currency);


    return (
      <CartItemContainer large={this.props.large}>
        <CardDetails large={this.props.large}>
          <ItemName large={this.props.large}>{productName}</ItemName>
          <ItemDesc>{productShortDesc}</ItemDesc>
          <ItemPrice
            large={this.props.large}
          >{`${price.currency} ${price.amount}`}</ItemPrice>
          <Sizes large={this.props.large}>
            <Size large={this.props.large}>S</Size>
            <Size large={this.props.large}>XS</Size>
            <Size large={this.props.large}>S</Size>
            <SizeM large={this.props.large}>M</SizeM>
          </Sizes>
        </CardDetails>
        <ItemDisplayContainer>
          <ItemQuantityWrapper>
            <AddButton
              onClick={() => this.handleQuantityChange("add",item.id,item.quantity)}
              large={this.props.large}
            >
              +
            </AddButton>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <MinusButton
              onClick={() => this.handleQuantityChange("remove",item.id,item.quantity)}
              large={this.props.large}
            >
              -
            </MinusButton>
          </ItemQuantityWrapper>
          <ItemDisplay>
            <ChevronArrowLeft
             onClick={() => this.handleImageChange(item.gallery,'previous')}
              src="/assets/vectors/arrow.svg"
              alt="chevron-arrow"
            />
            <ChevronArrow onClick={() => this.handleImageChange(item.gallery, 'next')} src="/assets/vectors/arrow.svg" alt="chevron-arrow" />
            <ItemImage src={this.state.setImage} alt="cart-item" />
          </ItemDisplay>
        </ItemDisplayContainer>
      </CartItemContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId) =>
    dispatch(mutateProductQantity(mutationType, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
