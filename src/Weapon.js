
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';


class Weapon extends Component {

  state = {
    ketQuaWeapon: '',
  }

  componentDidMount() {
    axios.get('http://localhost:5200/inuyasha/Weapon')
    .then(response => {
      this.setState({ketQuaWeapon: response.data});
      // alert(this.state.ketQuaWeapon)
    })
  }
  
  
  render() {
    const { ketQuaWeapon } = this.state
    const {  } = this.props

    return (
      <div className="Weapon" align='center'>
        <h1>Weapon</h1>

        {ketQuaWeapon
          ?
            <Grid doubling columns={3}>
              {/* <Grid.Row doubling columns={3}> */}
                {ketQuaWeapon.map((Weapon)=>
                  <Grid.Column>
                    <Popup
                      content={
                        <div>
                          <Image src={Weapon.image} size='big'></Image>
                          {Weapon.name}
                          <br/>
                          {Weapon.owners + ','}
                          <br/><br/><br/>
                        </div>
                      }
                      on='click'
                      pinned
                      trigger={<Image src={Weapon.image} size='small'></Image>}
                      position='center'
                    />
                    <br/>
                    {Weapon.name}
                    <br/>
                  </Grid.Column>
                )}
              {/* </Grid.Row> */}
            </Grid>
          :null
        }

      </div>
    )

  }



}
export default Weapon;