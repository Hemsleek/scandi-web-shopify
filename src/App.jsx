import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Routes from "./Routes";

//global styles
import GlobalStyle from "./globalStyles";

//Components
import PageLayout from './components/PageLayout'

const AppWrapper = styled.div`` 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppWrapper>
          <PageLayout>
            <Routes />
          </PageLayout>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
