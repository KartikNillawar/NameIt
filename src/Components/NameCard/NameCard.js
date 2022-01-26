import React from "react";
import "./NameCard.css"

const nameCheapUrl ='https://www.namecheap.com/domains/registration/results/?domain=';


const NameCard = ({suggestedname})=>{
    return(
        <a 
        href={`${nameCheapUrl}${suggestedname}`}
        target="_blank"
        rel="noreferrer"
        className="card-link"
        >
            <div className="result-name-card">
                <p key={suggestedname} className="result-name">{suggestedname}</p>
            </div>
        </a>
    )
}

export default NameCard;