import React from 'react';

// component styles
import {Wrapper, Content} from './PageLayoutElements'

//Component
import NavBar from '../NavBar'
class index extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
        <Wrapper>
            <NavBar />
            <Content>
                {this.props.children}
            </Content>
        </Wrapper>
        )
    }
}

export default index;