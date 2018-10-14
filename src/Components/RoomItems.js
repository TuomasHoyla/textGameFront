import React from 'react'
import { Button, Row, Col, Grid, Tooltip, OverlayTrigger, ButtonToolbar, Overlay, Modal } from 'react-bootstrap';

const tooltip = (description) => (
  <Tooltip id="tooltip" className="App-link underLine whiteBg">
    {description}
  </Tooltip>
)

const getItems = (items, takeItem) => items.map(item => {


  return (
    <Row style={{ marginTop: 2}}>
          <OverlayTrigger placement="left" overlay={tooltip(item.text)}>
            <Button bsStyle="warning" onClick={() => takeItem(item.id)}>{item.name}</Button>
          </OverlayTrigger>
  </Row>)
})


const RoomItems = ({ data, takeItem, drinkItem, options}) => {

  return (
    <div>
      <p><b>{options.header}</b></p>
      <ButtonToolbar>
      {data && getItems(data, takeItem, drinkItem)}
    </ButtonToolbar>
  </div>
  )
}

export default RoomItems
