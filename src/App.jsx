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
        <div>
          <div>My balance</div>
          <div>$921.48</div>
        </div>        
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23"/></g></svg>
      </div>
      <div className="spending-container">
        <div>Spending last 7 days</div>
        {week.map((day) => (
          <Bar key={day.day} day={day}/>) )}

      </div>
      
    </main>
    
  );
}

export default App;
