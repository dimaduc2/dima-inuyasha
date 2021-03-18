
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup, Table, Radio } from 'semantic-ui-react'
import axios from 'axios';


class Tona_Family_or_Team  extends Component {

  state = {
    ketQuaTonaFamilyOrTeam: '', 
    // bangDanhSach:'' , 
    dangXemTable: true,
  }

  componentDidMount() {
    axios.get('http://localhost:5200/inuyasha/Tona_Family_or_Team')
    .then(response => {
      this.setState({ketQuaTonaFamilyOrTeam: response.data});
      // alert(this.state.ketQuaTonaFamilyOrTeam)
    })
  }
  

  // doiBangDanhSach = () => {
  //   if(this.state.bangDanhSach === 'Table'){
  //     this.setState({ bangDanhSach: 'Git'});
  //   }
  //   else{
  //     this.setState({ bangDanhSach: 'Table'});
  //   }
  // }


  doiBangDanhSach = () => {
    if(this.state.dangXemTable === false){
      this.setState({ dangXemTable: true});
    }
    else{
      this.setState({ dangXemTable: false});
    }
  }


  render() {
    const { ketQuaTonaFamilyOrTeam, bangDanhSach, dangXemTable } = this.state
    const {  } = this.props

    return (
      <div className="Tona_Family_or_Team " align='center'>
        Table <Radio toggle 
          onChange={this.doiBangDanhSach}
        /> Gid
        
        <h1>Tona family or Team </h1>


    {
    // bangDanhSach === 'Table'
    dangXemTable === false
      ?
        <div>
          {ketQuaTonaFamilyOrTeam
            ?
              <Grid>
                <Grid.Row columns={2}>
                  {ketQuaTonaFamilyOrTeam.map((TonaFamilyOrTeam)=>
                    <Grid.Column>
                      <Popup
                        content={
                          <div>
                            <Image src={TonaFamilyOrTeam.image} size='big'></Image>
                            Name: {TonaFamilyOrTeam.name}
                            <br/>
                            Species: {TonaFamilyOrTeam.species + ','}
                            <br/>
                            Gender: {TonaFamilyOrTeam.gender}
                            <br/>
                            Love: {TonaFamilyOrTeam.love + ','}
                            <br/><br/><br/>
                          </div>
                        }
                        on='click'
                        pinned
                        trigger={<Image src={TonaFamilyOrTeam.image} size='small'></Image>}
                        position='center'
                      />
                      <br/>
                      {TonaFamilyOrTeam.name}
                      <br/>
                    </Grid.Column>
                  )}
                </Grid.Row>
              </Grid>
            :null
          }
          <br/><br/><br/><br/>
        </div>


      :
        <div>
          {ketQuaTonaFamilyOrTeam
            ?
            <Table celled striped>
              <Table.Body>

                {ketQuaTonaFamilyOrTeam.map((TonaFamilyOrTeam)=>
            
                  <Table.Row>
                    
                    <Table.Cell textAlign='center'>
                    <Image src={TonaFamilyOrTeam.image} size='small'></Image>
                    </Table.Cell>
                                  
                    <Table.Cell textAlign='center'>
                    {TonaFamilyOrTeam.name}
                    </Table.Cell>

                    <Table.Cell textAlign='center'>
                    {TonaFamilyOrTeam.species + ','}
                    </Table.Cell>

                    <Table.Cell textAlign='center'>
                    {TonaFamilyOrTeam.gender}
                    </Table.Cell>

                    <Table.Cell textAlign='center'>
                    {TonaFamilyOrTeam.love + ','}
                    </Table.Cell>

                  </Table.Row>

                )}

              </Table.Body>
            </Table>

            :null
          }
          <br/><br/><br/><br/>
        </div>
      }


      </div>
    )
  }
}
export default Tona_Family_or_Team ;