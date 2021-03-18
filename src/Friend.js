
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon } from 'semantic-ui-react'
import axios from 'axios';


class Friend extends Component {

  state = {
    ketQuaFriend: [],




  }

  componentDidMount() {
    axios.get('http://localhost:5200/inuyasha/Friend')
    .then(response => {
      this.setState({ketQuaFriend: response.data});
      // alert(this.state.ketQuaFriend)
    })
  }
  
  
  render() {
    const { ketQuaFriend } = this.state
    const {  } = this.props

    return (
      <div className="Friend" align='center'>
        <h1>Friend</h1>

        {ketQuaFriend
          // ?
          //   <Grid doubling columns={3}>
          //     {/* <Grid.Row doubling columns={3}> */}
          //       {ketQuaFriend.map((Friend)=>
          //         <Grid.Column>
          //           <Popup
          //             content={
          //               <div>
          //                 <Image src={Friend.image} size='big'></Image>
          //                 {Friend.name}
          //                 <br/>
          //                 {Yokai.gender}
          //                 <br/>
          //                 {Yokai.species}
          //                 <br/>
          //                 {Friend.image}
          //                 <br/><br/><br/>
          //               </div>
          //             }
          //             on='click'
          //             pinned
          //             trigger={<Image src={Friend.image} size='small'></Image>}
          //             position='center'
          //           />
          //           <br/>
          //           {Friend.name}
          //           <br/>
          //         </Grid.Column>
          //       )}
          //     {/* </Grid.Row> */}
          //   </Grid>
          // :null
        }
        
      </div>
    )
  }
}
export default Friend;