import React, { useRef, useEffect, useState } from 'react'
import '../styles/bar.css'

const Bar = ({day, week}) => {
  const [hovering, setHovering] = useState(false)
  const largest = useRef(0)
  const handleMouseOver = () =>{
    setHovering(true)
  }
  const handleMouseOut = ()=>{
    setHovering(false)
  }
  useEffect(() => {
    const findLargest = () =>{
      const highestSpendingDay = week.reduce((prevLargest, currentDay) =>{
        return (currentDay.amount > prevLargest) ? currentDay.amount : prevLargest
        // return highestSpendingDay
      }, 0)
      largest.current=highestSpendingDay
    }
    findLargest()
  }, [])
  
  
  // findLargest()
  return (
    <div className="day-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className='day-spent'>${day.amount}</div>      
      <div className='bar-display'
        style={{
          height:4*day.amount,
          backgroundColor: day.amount === largest.current ? 'var(--cyan)' : 'var(--soft-red)'
        }}></div>
    <div>{day.day}</div>
    </div>
    )
}

export default Bar