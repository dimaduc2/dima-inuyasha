import React, { Component } from 'react'

import {Menu, Icon, Radio} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import './App.css';
import Home from './Home'
import Tona_Family_or_Team from './Tona_Family_or_Team'
import Friend from './Friend'
import Weapon from './Weapon'
import Yokai from './Yokai'


class App extends Component {

  state = { mauSangToi: 'mauToi', mauMenu: true}

  chonMenu = (e, { name }) => {
    this.setState({ dangChonGi: name});
    // alert(name)
  }


  doiSangToi = () => {
    if(this.state.mauSangToi === 'mauToi'){
      this.setState({ mauSangToi: 'mauSang', mauMenu: false});
    }
    else{
      this.setState({ mauSangToi: 'mauToi', mauMenu: true});
    }
  }


  render() {const { dangChonGi, mauSangToi, mauMenu } = this.state
    return (
    <div className="App" style={{height: 'minHeight', backgroundColor: mauSangToi === 'mauToi' ?'black' :'white', 
                                                            color: mauSangToi === 'mauToi' ?'#ffbf00' :'black'}}>
    {/* <div className="App" style={{backgroundColor: 'black', height: '100vh'}}> */}
      <Router>
        
        {/* <Menu inverted = {mauSangToi === 'mauToi' ?true :false}> */}
        <Menu inverted = {mauMenu}>
          
          <Menu.Item
            as={Link}
            to="/"
            name='Home'
            active={this.state.dangChonGi === 'Home'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/Tona_Family_or_Team"
            name='Tona_Family_or_Team'
            active={this.state.dangChonGi === 'Tona_Family_or_Team'}
            onClick={this.chonMenu}>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/Friend"
            name='Friend'
            active={this.state.dangChonGi === 'Friend'}
            onClick={this.chonMenu}>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/Weapon"
            name='Weapon'
            active={this.state.dangChonGi === 'Weapon'}
            onClick={this.chonMenu}>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/Yokai"
            name='Yokai'
            active={this.state.dangChonGi === 'Yokai'}
            onClick={this.chonMenu}>
          </Menu.Item>

          <Menu.Item>
            <Icon name='moon' />
              <Radio toggle 
              onChange={this.doiSangToi}
               />
            <Icon name='sun' />
          </Menu.Item>

        </Menu>
        
        <Route exact path = "/"  component = {Home}/>
        <Route path = "/Tona_Family_or_Team" render={() => <Tona_Family_or_Team/>} />
        <Route path = "/Friend" render={() => <Friend/>} />
        <Route path = "/Weapon" render={() => <Weapon/>} />
        <Route path = "/Yokai" render={() => <Yokai/>} />
      </Router>
      
    </div>
    );
  }
}


export default App;
