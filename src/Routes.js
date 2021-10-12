import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'

//pages
import Home from './components/Home'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route to='/' exact component={Home} />  
            </Switch>
        )
    }
}
