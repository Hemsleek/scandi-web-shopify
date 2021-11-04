import React, { createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeCurrency,
  setAllCategory,
  setCategory,
  setCurrencies,
  toggleCart,
} from "../../store/actions";
import opusClient from "../../OPUS";
import { ALL_CURRENCY, ALL_CATEGORY } from "../../OPUS/queries";

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
  CurrencyDisplay,
} from "./NavBarElements";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilterOptions: false,
    };

    this.currencyBox = createRef();

    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.currencyClickAway = this.currencyClickAway.bind(this);
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.currencyClickAway);

    try {
      const response = await Promise.allSettled([
        opusClient.post(ALL_CURRENCY),
        opusClient.post(ALL_CATEGORY),
      ]);
      const [allCurrencyData, allCategoryData] = response;

      if (allCurrencyData.status === "fulfilled") {
        const { currencies } = allCurrencyData.value;
        this.props.setCurrencies(currencies);
        this.props.changeCurrency(currencies[0]);
      }
      if (allCategoryData.status === "fulfilled") {
        const { categories } = allCategoryData.value;
        const myCategories = [{ name: "all" }, ...categories];
        this.props.setAllCategory(myCategories);
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.currencyClickAway);
  }

  toggleFilter() {
    this.setState((CurrentState) => ({
      showFilterOptions: !CurrentState.showFilterOptions,
    }));
  }

  handleCurrencyChange(currency) {
    this.props.changeCurrency(currency);
    this.toggleFilter();
  }

  currencyClickAway(event) {
    if (!this.state.showFilterOptions) return null;
    if (
      this.currencyBox.current &&
      !this.currencyBox.current.contains(event.target)
    )
      this.setState({ showFilterOptions: false });
  }

  render() {
    const navTabs = this.props.tabs;
    const showBadges = this.props.cart.length > 0;

    return (
      <NavBarContainer>
        <NavTabs>
          {navTabs.map((tab, tabIndex) => (
            <Tab
              key={`nav-tab-index${tabIndex}`}
              className={
                this.props.selectedCategory === tab.name ? "active" : ""
              }
              onClick={() => this.props.setCategory(tab.name)}
            >
              {tab.name}
            </Tab>
          ))}
        </NavTabs>
        <Link to="/">
          <ImgWrapper src="/assets/vectors/brand-icon.svg" alt="brand-icon" />
        </Link>
        <SideActionsWrapper>
          <SideActions>
            <Filter onClick={() => this.toggleFilter()}>
              <CurrencyDisplay>{this.props.currency}</CurrencyDisplay>
              <ImgWrapper
                src="/assets/vectors/caret-arrow.svg"
                alt="caret-arrow"
                rotate={this.state.showFilterOptions === true ? "true" : ""}
              />
            </Filter>
            <Cart onClick={() => this.props.toggleCart()}>
              {showBadges && <Badges>{this.props.cart.length}</Badges>}
              <ImgWrapper src="/assets/vectors/cart.svg" alt="cart-icon" />
            </Cart>
          </SideActions>
          {this.state.showFilterOptions && (
            <FilterOptions ref={this.currencyBox}>
              {this.props.currencies.map((option, optionIndex) => (
                <Option
                  key={`filter-option-index${optionIndex}`}
                  onClick={() => this.handleCurrencyChange(option)}
                >
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
  currency: state.selectedCurrency,
  tabs: state.categories,
  selectedCategory: state.selectedCategory,
  currencies: state.currencies,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
  setCategory: (option) => dispatch(setCategory(option)),
  setCurrencies: (currencies) => dispatch(setCurrencies(currencies)),
  setAllCategory: (categories) => dispatch(setAllCategory(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
