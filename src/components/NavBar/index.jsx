import React from "react";

//Components Styles
import {
  Badges,
  Cart,
  Filter,
  ImgWrapper,
  NavBarContainer,
  NavTabs,
  SideActions,
  Tab,
} from "./NavBarElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: "Women,Men,Kids".split(","),
      activeTab: "Women",
    };
  }

  render() {
    const navTabs = this.state.tabs;

    return (
      <NavBarContainer>
        <NavTabs>
          {navTabs.map((tab, tabIndex) => (
            <Tab
              key={`nav-tab-index${tabIndex}`}
              className={this.state.activeTab === tab ? "active" : ""}
              onClick={() => this.setState({ activeTab: tab })}
            >
              {tab}
            </Tab>
          ))}
        </NavTabs>
        <ImgWrapper src="/assets/vectors/brand-icon.svg" alt="brand-icon" />
        <SideActions>
          <Filter>
            <ImgWrapper src="/assets/vectors/dollar.svg" alt="dollar-icon" />
            <ImgWrapper
              src="/assets/vectors/caret-arrow.svg"
              alt="caret-arrow"
            />
          </Filter>
          <Cart>
            <Badges>2</Badges>
            <ImgWrapper src="/assets/vectors/cart.svg" alt="cart-icon" />
          </Cart>
        </SideActions>
      </NavBarContainer>
    );
  }
}

export default index;
