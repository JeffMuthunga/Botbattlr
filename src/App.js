import React, {useState, useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';
import BotArmy from './Components/YourBotArmy';
import Swal from 'sweetalert2';

function App() {
  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])
  const [deleteBtnMode, setDeleteBtnMode] = useState(true)
    
  useEffect(()=>{
      fetch("http://localhost:8001/bots")
      .then(r=>r.json())
      .then((data)=> setData(data))
  }, [])

  const onDivClick =(id) =>{
  
    const item = data.find((bot)=>bot.id === id)
    const fav = favorites.find((item)=> item.id === id)
    
    fav? Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Bot ${item.name} is already in your army`,
    }): setFavorites([...favorites, item])
  }
  function clickOnFavDiv(id) {
    const unremovedDiv =  favorites.filter((clicked)=> clicked.id !== id)
    setFavorites(unremovedDiv)
  }
  function handleDelete(id){
    fetch(`http://localhost:8001/bots/${id}`,{
        method: "DELETE"
    })
    .then(r=>r.json())
    .then((data)=> filterDeletedDiv(id))
}
  function filterDeletedDiv (id){
    const remainingElements = data.filter((obj)=> obj.id !== id)
    setData(remainingElements)

  }
  return(
    <div>
    <BotArmy favorites={favorites} deleteButton={false} handleClick={clickOnFavDiv} />
    <BotCollection data={data} handleClick={onDivClick} handleDelete={handleDelete}  deleteButton={true}/>
   </div>
  )
}

export default App;
