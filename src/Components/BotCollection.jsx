import Bot from "./Bot";

function BotCollection ({data, handleClick, deleteButton, handleDelete}) {
  

    const botList = data.map((bot)=><Bot handleDelete={handleDelete} deleteButton={deleteButton} handleClick={handleClick} botProperties={bot} key={bot.id}/>)
    return(
        <div className="bot-collection">
            {botList}
        </div>
    )
}
export default BotCollection