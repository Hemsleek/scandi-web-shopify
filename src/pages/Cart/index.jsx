import React, {Fragment} from 'react';
import { CartTitle, CWrapper } from './CartElements';

// Component
import CartItem from '../../components/CartItem'

class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
        <Fragment>
            <CartTitle>CART</CartTitle>
            <CWrapper>
                {
                    Array(2).fill(' ')
                    .map((item, itemIndex) => (
                        <CartItem key={`cart-page-item${itemIndex}`} large />
                    ))
                }
            </CWrapper>
        </Fragment>
        )
    }
}

export default index;