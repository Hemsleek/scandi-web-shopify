import React from "react";
import {connect} from 'react-redux' 
import { changeCurrency, setAllCategory, setCategory, setCurrencies, toggleCart } from "../../store/actions";
import { fetchData } from '../../Apollo'

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
import { ALL_CURRENCY,ALL_CATEGORY } from "../../Apollo/queries";

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilterOptions: false,
      
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleCurrencyChange= this.handleCurrencyChange.bind(this);

  }

  async componentDidMount(){  
      try {
        const response = await Promise.allSettled([fetchData(ALL_CURRENCY),fetchData(ALL_CATEGORY)])
        const [allCurrencyData, allCategoryData] = response

        if(allCurrencyData.status === 'fulfilled'){
          const {currencies} = allCurrencyData.value.data
          this.props.setCurrencies(currencies)
          this.props.changeCurrency(currencies[0][0])

        }
        if(allCategoryData.status === 'fulfilled'){
          const {categories} = allCategoryData.value.data
          this.props.setAllCategory(categories)
          this.props.setCategory(categories[0].name)
        }
        
      } catch (error) {
        console.log(error)
      }
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
              className={this.props.selectedCategory === tab.name ? "active" : ""}
              onClick={() => this.props.setCategory(tab.name)}
            >
              {tab.name}
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
              {this.props.currencies.map((option, optionIndex) => (
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
  currency:state.selectedCurrency,
  tabs:state.categories,
  selectedCategory:state.selectedCategory,
  currencies:state.currencies
})

const mapDispatchToProps = (dispatch) => ({
  toggleCart:() => dispatch(toggleCart()),
  changeCurrency:(currency) => dispatch(changeCurrency(currency)),
  setCategory:(option) => dispatch(setCategory(option)),
  setCurrencies:(currencies) => dispatch(setCurrencies(currencies)),
  setAllCategory:(categories) => dispatch(setAllCategory(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(index);
