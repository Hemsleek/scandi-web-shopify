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
              <Route exact path='/' component={Home} />  
              <Route path='/cart'  component={Cart} />  
              <Route path='/product/:id'  component={ProductDescPage} />  
            </Switch>
        )
    }
}
