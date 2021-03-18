
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon } from 'semantic-ui-react'
import axios from 'axios';


class Yokai extends Component {

  state = {
    ketQuaYokai: [],




  }

  componentDidMount() {
    axios.get('http://localhost:5200/inuyasha/Yokai')
    .then(response => {
      this.setState({ketQuaYokai: response.data});
      // alert(this.state.ketQuaYokai)
    })
  }
  
  
  render() {
    const { ketQuaYokai } = this.state
    const {  } = this.props

    return (
      <div className="Yokai" align='center'>
        <h1>Yokai</h1>
        
        {ketQuaYokai
          // ?
          //   <Grid doubling columns={3}>
          //     {/* <Grid.Row doubling columns={3}> */}
          //       {ketQuaYokai.map((Yokai)=>
          //         <Grid.Column>
          //           <Popup
          //             content={
          //               <div>
          //                 <Image src={Yokai.image} size='big'></Image>
          //                 {Yokai.name}
          //                 <br/>
          //                 {Yokai.gender}
          //                 <br/>
          //                 {Yokai.image}
          //                 <br/><br/><br/>
          //               </div>
          //             }
          //             on='click'
          //             pinned
          //             trigger={<Image src={Yokai.image} size='small'></Image>}
          //             position='center'
          //           />
          //           <br/>
          //           {Yokai.name}
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
export default Yokai;