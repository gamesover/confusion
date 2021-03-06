import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import logo from './logo.svg'
import './App.css'

import {DISHES} from './shared/dishes'
import Menu from './components/MenuComponent'
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
