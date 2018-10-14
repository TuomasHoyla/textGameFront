import React from 'react'
import { Button, Row, Col, Grid } from 'react-bootstrap';

const drawMap = (row) => row.map(col => {
    return <div>{col}</div>
})

const Map = ({ data }) => {
  return (

    <div>
      <p style={{"text-align": "center"}}><b>Map</b></p>
      <Row className="mapBorder">
        {data.map && drawMap(data.map)}
      </Row>
    </div>
  )
}

export default Map
