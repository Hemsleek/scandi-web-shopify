import React from 'react';
import {connect} from 'react-redux'

// component styles
import {Wrapper, Content, Main} from './PageLayoutElements'

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
        <Wrapper >
            <NavBar />
            <Main >
            { this.props.isCartOpen &&  <CartOverlay />}
            <Content>
                {this.props.children}
            </Content>
            </Main>
        </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    isCartOpen:state.isCartOpen
})

export default connect(mapStateToProps,null)(index);