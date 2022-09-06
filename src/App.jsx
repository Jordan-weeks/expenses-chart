import { useEffect, useState } from 'react';
import './App.css';
import Bar from './components/Bar';


function App() {
  const [week,setWeek] = useState([])

useEffect(() =>{
  const fetchData = async() =>{
    try{
      const response = await fetch('http://localhost:5000/week-1')
      const data = await response.json()
      setWeek(data)
    }catch(err){
      console.log(err.stack)
    }     
    }
  fetchData()
  
},[])
  return (
    <main>
      <div className="balance-container">
        <div className='my-balance'>
          <p>My balance</p>
          <h2>$921.48</h2>
        </div>        
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23"/></g></svg>
      </div>
      <div className="spending-container">
        <h2>Spending - last 7 days</h2>
        <div className="chart">
          {week.map((day) => (
            <div className="day">
              <Bar key={day.day} day={day} week={week}/>
            </div>
          ))}
        </div>
        <div className="month-container">
          <div className="total-container">
            <p>Total this month</p>
            <h2>$478.33</h2>
          </div>
          
          <div className="percent-container">
            <div>+2.4%</div>
            <p>from last month</p>
          </div>
        </div>
        
        
        

      </div>
      
    </main>
    
  );
}

export default App;
