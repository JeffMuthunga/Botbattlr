import Bot from "./Bot";

function BotCollection ({data, handleClick}) {
  

    const botList = data.map((bot)=><Bot handleClick={handleClick} botProperties={bot} key={bot.id}/>)
    return(
        <div className="bot-collection">
            {botList}
        </div>
    )
}
export default BotCollection