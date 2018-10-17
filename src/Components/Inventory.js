import React from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap';
import ItemModal from './ItemModal'

const getInventory = (items, dropItem, drinkItem, setHealth) => items.map(item => {

  return (
    <Row style={{ marginTop: 2}} key={item.id}>
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
