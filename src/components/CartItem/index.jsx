import React from 'react';
import { AddButton, CardDetails, CartItemContainer, ItemImage, ItemDesc, ItemDisplay, ItemDisplayContainer, ItemName, ItemPrice, ItemQuantity, ItemQuantityWrapper, MinusButton, Size, Sizes, SizeM, ChevronArrow, ChevronArrowLeft } from './CartItemElements';

class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
        <CartItemContainer>
            <CardDetails>
            

                <ItemName>Apollo</ItemName>
                <ItemDesc>Running Short</ItemDesc>
                <ItemPrice>$50.00</ItemPrice>
                <Sizes>
                    <Size>S</Size>
                    <SizeM>M</SizeM>
                </Sizes>
            </CardDetails>
            <ItemDisplayContainer>
                <ItemQuantityWrapper>
                    <AddButton>+</AddButton>
                    <ItemQuantity>1</ItemQuantity>
                    <MinusButton>-</MinusButton>
                </ItemQuantityWrapper>
                <ItemDisplay>
                    <ChevronArrowLeft src='/assets/vectors/arrow.svg' alt='chevron-arrow'/>
                    <ChevronArrow src='/assets/vectors/arrow.svg'  alt='chevron-arrow'/>
                    <ItemImage src='/assets/images/cart-item.png' alt="cart-item" />
                </ItemDisplay>
            </ItemDisplayContainer>
        </CartItemContainer>
        )
    }
}


export default index;