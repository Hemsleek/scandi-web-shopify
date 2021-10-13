import React from 'react';
import { Title } from '../ProductCard/ProductCardElements';
import { BoldText, CartItemWrapper, CartOverlayWrapper, MiniCart, SmallText } from './CartOverlayElements';

//Components
import CartItem from '../CartItem'
import { ActionButtons, CheckOut, CostLabel, CostValue, TotalCost, ViewBag } from '../CartItem/CartItemElements';

class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
        <CartOverlayWrapper>
                <MiniCart>
                        <Title>
                            <BoldText>My Bag, </BoldText>
                            <SmallText>2 items</SmallText>
                        </Title>
                        <CartItemWrapper>
                            {
                                Array(2).fill(' ')
                                .map((item, itemIndex) => (
                                    <CartItem key={`cart-item${itemIndex}`} />
                                ))
                            }
                        </CartItemWrapper>
                        <TotalCost>
                            <CostLabel>Total</CostLabel>
                            <CostValue>$100</CostValue>
                        </TotalCost>
                        <ActionButtons>
                            <ViewBag>VIEW BAG</ViewBag>
                            <CheckOut>CHECK OUT</CheckOut>
                            
                        </ActionButtons>
                </MiniCart>
        </CartOverlayWrapper>
        )
    }
}


export default index;