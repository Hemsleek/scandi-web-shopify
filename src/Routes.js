import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Cart from './pages/Cart'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route to='/cart'  component={Cart} />  
              <Route to='/' exact component={Home} />  
            </Switch>
        )
    }
}
