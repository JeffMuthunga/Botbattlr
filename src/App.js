import React, {useState, useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/YourBotArmy';

function App() {
  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])
    
  useEffect(()=>{
      fetch("http://localhost:8001/bots")
      .then(r=>r.json())
      .then((data)=> setData(data))
  }, [])

  const onDivClick =(id) =>{
    const item = data.find((bot)=>bot.id === id)
    const fav = favorites.find((item)=> item.id === id)
    fav? alert("existing") : setFavorites([...favorites, item])
  }
  return(
    <div>
    <BotArmy favorites={favorites} />
    <BotCollection data={data} handleClick={onDivClick} />
   </div>
  )
}

export default App;
