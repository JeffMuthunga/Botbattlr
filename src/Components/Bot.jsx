import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeartPulse, faBolt, faShieldHalved} from '@fortawesome/free-solid-svg-icons'

function Bot({botProperties, handleClick, deleteButton, handleDelete}){
    const {id, name, health, damage, armor, catchphrase, avatar_url} = botProperties

    return(
        <div>
           <div  className="bot-container" >
                <img onClick={()=>handleClick(id)} src={avatar_url} alt={name}/>
                <h2>{name}</h2>
                <p>{catchphrase}</p>
                <div className='foot'>
                    <div><FontAwesomeIcon icon={faHeartPulse} beat></FontAwesomeIcon><span>{health}</span></div>
                    <div><FontAwesomeIcon icon={faBolt} shake ></FontAwesomeIcon><span>{damage}</span></div>
                    <div><FontAwesomeIcon icon={faShieldHalved} shake ></FontAwesomeIcon><span>{armor}</span></div>
                </div>      
                {deleteButton ? <button onClick={()=>handleDelete(id)} ><em>Delete</em></button>: null}  
            </div>
        </div>
            )
        
}

export default Bot