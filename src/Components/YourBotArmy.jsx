import Bot from "./Bot"
import React, {useState, useEffect} from "react"

function BotArmy({favorites, handleClick}) {
  
    
  

  
 
    const botList = favorites.map((bot)=><Bot botProperties={bot} handleClick={handleClick} key={bot.id}/>)
    
    return(
        <div className="allarmy">
            <header><h2>YOUR ARMY</h2></header>
        <div className="army-collection">
           
            {botList}
        </div>
        </div>
    )
}

export default BotArmy