import React from 'react'

const Bar = ({day}) => {
  return (
    <>
    <div>{day.day}</div>
    <div>${day.amount}</div>
    </>
    

  )
}

export default Bar