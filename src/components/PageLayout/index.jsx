import React from 'react';

// component styles
import {Wrapper, Content} from './PageLayoutElements'

//Component
import NavBar from '../NavBar'
import CartOverlay from '../CartOverlay'
class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        isCartOpen: false,
    };
    this.toggleCart = this.toggleCart.bind(this)
}
    toggleCart(){
        this.setState((currentState) => ({
           isCartOpen: !currentState.isCartOpen
        }))
    }

    render() {
        return (
        <Wrapper>
            <NavBar toggleCart={() => this.toggleCart()} isCartOpen={this.state.isCartOpen} />
            <Content>
               { this.state.isCartOpen &&  <CartOverlay />}
                {this.props.children}
            </Content>
        </Wrapper>
        )
    }
}

export default index;