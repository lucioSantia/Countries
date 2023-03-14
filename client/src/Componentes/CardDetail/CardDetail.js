import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriDetail} from "../../redux/actions/index";
import { useParams } from "react-router-dom"
import {useEffect } from "react";

const CardDetail = (props) => {
    const dispatch = useDispatch()
    let {id} = useParams()
  
    useEffect(() => {
            dispatch(getCountriDetail(id)); 
        }, [dispatch, id])

    const contryDetail = useSelector((state)=> state.detail)
    // const seraArray = contryDetail.ActividadTuristicas
    // console.log( "contryDetail", typeof seraArray)
    
 return (
     <div>
        <div>              
            <div>
                        <Link to="/home">
                            <button>Volver</button>
                        </Link> 
                    </div>  

          { 
            contryDetail && contryDetail ?
           <div>
                
                <h1>{contryDetail.name}</h1>
                <h1 > ID: {contryDetail.id}</h1>
                <h1 >{contryDetail.continents}</h1>
                <img src={contryDetail.flagsImg ?  contryDetail.flagsImg : contryDetail.flagsImg } alt="bandera"/>
                <h1 > capital: {contryDetail.capital}</h1>
                <h1 > subregion: {contryDetail.subregion}</h1>
                <h1> area: {contryDetail.area}</h1>
                <h1> poblacion: {contryDetail.population}</h1>
                
          </div> :  <p >Loading...</p>
           } 
        <div>
           {
            ( 
                contryDetail.ActividadTuristicas ? contryDetail.ActividadTuristicas.map(
                (el) => {
                        return (
                     <div>
                        <h3 > Actividad: {el.name} </h3>
                        <h3> Dificultad: {el.dificultad} </h3>
                        <h3> Duracion: {el.duracion} </h3>
                        <h3> Temporada: {el.temporada} </h3>
                     </div>
                    )}) :  <h1> no hay actividades </h1>) 
           } 
                </div>
        </div>
        </div>
    )
}

export default CardDetail