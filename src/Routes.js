import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDescPage from './pages/ProductDescPage'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact to='/' component={Home} />  
              <Route exact to='/product'  component={ProductDescPage} />  
              <Route exact to='/cart'   component={Cart} />  
            </Switch>
        )
    }
}
