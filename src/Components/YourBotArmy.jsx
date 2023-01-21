import Bot from "./Bot"


function BotArmy({favorites, handleClick, deleteButton}) {


    const botList = favorites.map((bot)=><Bot botProperties={bot} handleClick={handleClick} deleteButton={deleteButton} key={bot.id}/>)
    
    return(
        <div className="allarmy">
            <header><h2>MY ARMY</h2></header>
        <div className="army-collection">
           
            {botList}
        </div>
        </div>
    )
}

export default BotArmy