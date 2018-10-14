import React from 'react'
import { Button, Row, Col, Grid, Tooltip, OverlayTrigger, ButtonToolbar, Overlay, Modal } from 'react-bootstrap';
import axios from 'axios'

class ItemModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        showModal: false,
        message: null,
      }
  }

  getInitialState = () => {
    return { showModal: false }
  }

  close = () => {
    this.setState({ showModal: false, message: null })
  }

  open = () => {
    this.setState({ showModal: true })
  }

  dropItem = (itemId) => {
    this.props.dropItem(itemId)
    this.setState({ showModal: false })
  }

  drinkItem = (item) => {
    this.props.drinkItem(item.id)

    let message = item.isActive ? 'You took a gulp' : 'You try to squeeze a drop, but in vain'

    this.setState({ message: message })
  }

render() {
    return (
      <div>
        <Button bsStyle="warning" onClick={this.open}>
          {this.props.item.name}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{this.props.item.text} </div>
            <p bsStyle="pull-left">{this.state.message}</p>
          </Modal.Body>
          <Modal.Footer>
            {this.props.item.isEdible && <Button onClick={() => {this.drinkItem(this.props.item)}}>Drink</Button>}
            <Button bsStyle="danger"onClick={() => this.dropItem(this.props.item.id)}>Drop
            </Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}
}

export default ItemModal
