import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { fetchData } from "../../Apollo";
import { CATEGORY_QUERY } from "../../Apollo/queries";


// components
import ProductCard from "../../components/ProductCard/index";
import { ProductWrapper, Title } from "./HomeElements";
 class index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category:{}
    };
  }

  async componentDidMount(){
    try {
      if(this.props.selectedCategory){
        const {data} = await fetchData(CATEGORY_QUERY(this.props.selectedCategory))
        this.setState({category:data.category})
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  async shouldComponentUpdate(nextProps){
    try {
      if(nextProps.selectedCategory!== this.props.selectedCategory){
          const {data} = await fetchData(CATEGORY_QUERY(nextProps.selectedCategory))
          this.setState({category:data.category})
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  

  render() {
    const productsToShow = this.state.category.products || []

    return (
      <Fragment>
        <Title>{this.props.selectedCategory}</Title>
        <ProductWrapper>
          {productsToShow
            .map((product, productIndex) => (
              <ProductCard key={`category-product-index${productIndex}`} productData={product} history={this.props.history} />
            ))}
        </ProductWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory:state.selectedCategory,
})



export default connect(mapStateToProps,null)(index)