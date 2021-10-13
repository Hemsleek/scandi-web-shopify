import React from "react";

//Components Styles
import {
  Badges,
  Cart,
  Filter,
  FilterOptions,
  ImgWrapper,
  NavBarContainer,
  NavTabs,
  Option,
  SideActions,
  SideActionsWrapper,
  Tab,
} from "./NavBarElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: "Women,Men,Kids".split(","),
      activeTab: "Women",
      filterOptions: "$ USD,€ EUR,¥ JPY".split(","),
      showFilteredOption: false,
    };
    this.toggleShowFilters = this.toggleShowFilters.bind(this);
  }
  toggleShowFilters() {

    this.setState((state) => ({
      showFilteredOption: !state.showFilteredOption,
    }));
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
        <SideActionsWrapper>
          <SideActions>
            <Filter onClick={() => this.toggleShowFilters()}>
              <ImgWrapper src="/assets/vectors/dollar.svg" alt="dollar-icon" />
              <ImgWrapper
                src="/assets/vectors/caret-arrow.svg"
                alt="caret-arrow"
                rotate={this.state.showFilteredOption}
              />
            </Filter>
            <Cart>
              <Badges>2</Badges>
              <ImgWrapper src="/assets/vectors/cart.svg" alt="cart-icon" />
            </Cart>
          </SideActions>
          {this.state.showFilteredOption && (
            <FilterOptions>
              {this.state.filterOptions.map((option, optionIndex) => (
                <Option key={`filter-option-index${optionIndex}`}>
                  {option}
                </Option>
              ))}
            </FilterOptions>
          )}
        </SideActionsWrapper>
      </NavBarContainer>
    );
  }
}

export default index;
