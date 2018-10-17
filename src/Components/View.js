import React from 'react'

const View = ({ data }) => {

  return (
    <div>
      <p>
        {data.location && data.location.name}
      </p>
      <p>
      {data.location && data.location.text}
      </p>
      <p className="App-link underLine">
        {data.message && data.message}
      </p>
    </div>
  )
}

export default View
