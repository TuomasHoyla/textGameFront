import React from 'react'
import { Button, Row, Col, Grid, Tooltip, OverlayTrigger, ButtonToolbar, Overlay, Modal } from 'react-bootstrap';
import axios from 'axios'
import ItemModal from './ItemModal'

const getInventory = (items, dropItem, drinkItem, setHealth) => items.map(item => {

  return (
    <Row style={{ marginTop: 2}}>
      <ItemModal item={item} drinkItem={drinkItem} dropItem={dropItem} setHealth={setHealth}/>
  </Row>)
})

const Inventory = ({data, dropItem, drinkItem, setHealth, options}) => {

  return (
    <div>
      <p><b>{options.header}</b></p>
      <ButtonToolbar>
      {data && getInventory(data, dropItem, drinkItem, setHealth)}
    </ButtonToolbar>
  </div>
  )
}

export default Inventory
