import React from "react";
import "./ResultContainer.css"
import NameCard from "../NameCard/NameCard";

const ResultContainer = ({suggestednames})=>{
    const suggestednameJsx = suggestednames.map(suggestedname=>{
        return <NameCard key={suggestedname} suggestedname={suggestedname} />
    })
    return(
        <div className="result-container">
            {suggestednameJsx}
        </div>
    )
}

export default ResultContainer;