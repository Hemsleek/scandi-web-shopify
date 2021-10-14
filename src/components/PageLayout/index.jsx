import React from 'react';
import {connect} from 'react-redux'

// component styles
import {Wrapper, Content} from './PageLayoutElements'

//Component
import NavBar from '../NavBar'
import CartOverlay from '../CartOverlay'
class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
    

    render() {
        return (
        <Wrapper cartOpen={this.props.isCartOpen}>
            <NavBar />
            <Content>
               { this.props.isCartOpen &&  <CartOverlay />}
                {this.props.children}
            </Content>
        </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    isCartOpen:state.isCartOpen
})

export default connect(mapStateToProps,null)(index);