import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({name, continents, flagsImg, id}) => {
    let history = useHistory();

    
    const rutaDetalle = (e) => {
      history.push(`/home/${id}`)
    }


    return (

      <div  onClick={rutaDetalle}>
            <h3 >{name}</h3> 
            <img src={flagsImg} alt="img not found" />
            <h5 >{continents}</h5>  
       </div>
       
    )
}

export default Card; 