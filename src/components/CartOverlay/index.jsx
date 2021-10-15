import React from 'react';
import { Title } from '../ProductCard/ProductCardElements';
import { BoldText, CartItemWrapper, CartOverlayWrapper, MiniCart, SmallText,ActionButtons, CheckOut, CostLabel, CostValue, TotalCost, ViewBag } from './CartOverlayElements';

//Components
import CartItem from '../CartItem'
import { connect } from 'react-redux';

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
                                this.props.cart
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

const mapStateToProps = (state) => ({
      cart:state.cart
    });
    
    // const mapDispatchToProps = (dispatch) => ({
    //   mutateQuantity: (mutationType, productId) =>
    //     dispatch(mutateProductQantity(mutationType, productId)),
    // });

export default connect(mapStateToProps,null)(index);