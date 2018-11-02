import React, { Component } from 'react';
import { Button, Row, Col, Grid, ProgressBar, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios'
import './App.css';
import View from './Components/View'
import Map from './Components/Map'
import Inventory from './Components/Inventory'
import RoomItems from './Components/RoomItems'

const baseUrl = 'http://localhost:5000/'
//const baseUrl = 'https://arcane-plateau-73839.herokuapp.com/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: {},
    }
  }

  componentDidMount() {
    axios
      .get(baseUrl)
      .then(response => {
        //console.log(response.data)
        this.setState({ game: response.data })
      })
  }

  reset = (event) => {
    event.preventDefault()
    axios
      .get(baseUrl + 'reset')
      .then(response => {
        console.log(response.data)
        this.setState({ game: response.data })
      })
  }

  moveNorth = (event) => {
    event.preventDefault()
    axios
      .get(baseUrl + 'n')
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  moveSouth = (event) => {
    event.preventDefault()
    axios
      .get(baseUrl + 's')
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  moveEast = (event) => {
    event.preventDefault()
    axios
      .get(baseUrl + 'e')
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  moveWest = (event) => {
    event.preventDefault()
    axios
      .get(baseUrl + 'w')
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  dropItem = (itemId) => {
    axios
      .get(baseUrl + 'drop/' + itemId)
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  takeItem = (itemId) => {
    axios
      .get(baseUrl + 'take/' + itemId)
      .then(response => {
        this.setState({ game: response.data })
      })
  }

  drinkItem = (itemId) => {
    axios
      .get(baseUrl + 'drink/' + itemId)
      .then(response => {
        this.setState({ game: response.data })
      }
    )
  }

  setHealth = (amount) => {
    this.setState({ game: amount})
  }

  render() {
    return(
    <div className="container-fluid">
      <Grid>
          <Col xs={12} md={12}>
            <ButtonToolbar>
              <Button bsStyle="danger" bsSize="xsmall" disabled={false} style={{ marginTop: 5}} onClick={this.reset}>Reset map</Button>
            </ButtonToolbar>
            <h3>Fez Ferguson</h3>
          </Col>
          <Col xs={4} md={4}>
            Health: <ProgressBar now={this.state.game.health} label={`${this.state.game.health}%`}/>
               <View data={this.state.game}/>
               <Row style={{ marginTop: 40, marginLeft: 20 }}>
                 {this.state.game.location && this.state.game.location.roomItems.length > 0 &&
                  <RoomItems
                    data={this.state.game.location.roomItems}
                    takeItem={this.takeItem}
                    options={{header: 'Items on the ground:'}}
                  />}
               </Row>
          </Col>
          <Col xs={8} md={8}>
            <Col xs={3} md={3} xsOffset={1}>
              <Button onClick={this.moveNorth}>North</Button>
          </Col>
          <Col xs={3} md={9}>
            <Button onClick={this.moveWest} className="">West</Button>
            <Button onClick={this.moveSouth}>South</Button>
            <Button onClick={this.moveEast}>East</Button>
            <Row style={{ marginTop: 40, marginLeft: 20 }}>
              {this.state.game.inventory && this.state.game.inventory.length > 0 &&
                <Inventory
                  data={this.state.game.inventory}
                  dropItem={this.dropItem}
                  drinkItem={this.drinkItem}
                  setHealth={this.setHealth}
                  options={{header: 'Inventory:'}}
                />}
            </Row>
          </Col>
          <Col xs={2} md={2}>
          <div>
             <Map data={this.state.game}/>
          </div>
        </Col>
        </Col>
      </Grid>
    </div>
  )}
}

export default App;
