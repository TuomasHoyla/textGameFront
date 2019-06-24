import * as React from 'react';

type ViewType = {
    data: {
      message : string
      location : {
          name : string
          text : string
      }
    } 
}

const View: React.SFC<ViewType> = (props) => {

  const { data } = props

  return (
  <div>
      <p>
        {data.location && data.location.name}
      </p>
      <p>
        {data.location && data.location.text}
      </p>
      <p className="App-link underLine">
        {data.message}
      </p>
  </div>
  )
}

export default View;