import Bot from "./Bot";

function BotCollection ({data, handleClick, deleteButton}) {
  

    const botList = data.map((bot)=><Bot deleteButton={deleteButton} handleClick={handleClick} botProperties={bot} key={bot.id}/>)
    return(
        <div className="bot-collection">
            {botList}
        </div>
    )
}
export default BotCollection