import React from 'react'

const Result = (props) => {
  const house = props.house
  console.log(`Result component --> house -->`, house)
  return (
    <div id='result'>
      <img src={`/${house}.png`} />
      <p>You ought to be in...{house}!</p>
    </div>
  )
}

export default Result
