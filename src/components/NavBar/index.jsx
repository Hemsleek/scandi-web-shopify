import React from "react";
import {connect} from 'react-redux' 
import { changeCurrency, setCategory, toggleCart } from "../../store/actions";


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
  CurrencyDisplay
} from "./NavBarElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterOptions: "$ USD,€ EUR,¥ JPY".split(","),
      showFilterOptions: false,
      
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleCurrencyChange= this.handleCurrencyChange.bind(this);

  }

  toggleFilter() {
      this.setState((CurrentState) => ({
        showFilterOptions: !CurrentState.showFilterOptions,
      }));
    
  }

  handleCurrencyChange(currency){
      this.props.changeCurrency(currency[0])
      this.toggleFilter()
  }

  render() {
    const navTabs = this.props.tabs;

    return (
      <NavBarContainer>
        <NavTabs>
          {navTabs.map((tab, tabIndex) => (
            <Tab
              key={`nav-tab-index${tabIndex}`}
              className={this.props.selectedCategory === tab ? "active" : ""}
              onClick={() => this.props.setCategory(tab)}
            >
              {tab}
            </Tab>
          ))}
        </NavTabs>
        <ImgWrapper src="/assets/vectors/brand-icon.svg" alt="brand-icon" />
        <SideActionsWrapper>
          <SideActions>
            <Filter onClick={() => this.toggleFilter()}>
              
              <CurrencyDisplay>{this.props.currency}</CurrencyDisplay>
              <ImgWrapper
                src="/assets/vectors/caret-arrow.svg"
                alt="caret-arrow"
                rotate={this.state.showFilterOptions}
              />
            </Filter>
            <Cart onClick={() => this.props.toggleCart()}>
              <Badges>2</Badges>
              <ImgWrapper src="/assets/vectors/cart.svg" alt="cart-icon" />
            </Cart>
          </SideActions>
          {this.state.showFilterOptions && (
            <FilterOptions>
              {this.state.filterOptions.map((option, optionIndex) => (
                <Option key={`filter-option-index${optionIndex}`} onClick={() => this.handleCurrencyChange(option)}>
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
const mapStateToProps = (state) => ({
  currency:state.currency,
  tabs:state.tabs,
  selectedCategory:state.selectedCategory
})

const mapDispatchToProps = (dispatch) => ({
  toggleCart:() => dispatch(toggleCart()),
  changeCurrency:(currency) => dispatch(changeCurrency(currency)),
  setCategory:(option) => dispatch(setCategory(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(index);
