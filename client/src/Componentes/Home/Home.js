import React, { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {getCountries, filterCountries, orderByName,  orderByPopulation, filterByActivity, getActivities} from "../../redux/actions/index"; 
// import {Link} from "react-router-dom"; 
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    const dispatch = useDispatch();
    const todosLosPaises = useSelector((state) => state.filteredContries)
    const activities = useSelector(state => state.activities)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);

    const indexOfLastCountry = currentPage * countriesPerPage; 
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = todosLosPaises.slice(indexOfFirstCountry, indexOfLastCountry)


    const paginado = (pageNumber) => {
        if (pageNumber === 1) {
            setCountriesPerPage(9);
            setCurrentPage(pageNumber)
        } else if (pageNumber > 25) {
            setCountriesPerPage(10);
            setCurrentPage(25)
        } else {
            setCountriesPerPage(10);
            setCurrentPage(pageNumber)
        }
    }


    useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
}, [dispatch])


const handlerClick = (e) => {

    e.preventDefault()
    dispatch(getCountries())
}


 const handlerFilterContinents = (e) => {
    console.log("dentro del handlerFilterContinents")
    e.preventDefault()
    dispatch(filterCountries(e.target.value)); 
    setCurrentPage(1)
}

const handlerFilterName = (e) => {
    e.preventDefault(e);
    console.log(e.target.value)
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
}

const handlerFilterPopulation = (e) => {
    e.preventDefault(e);
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
   
}

function handlefilteredByActivity(e){
    e.preventDefault();
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
    
}
 
return (
        <div>
            <div>
          
              
              <h1>Api Countries</h1>
              <NavBar/>
              <SearchBar/> 

              <div>
             <button onClick={handlerClick}>Cargar Paises</button>

           

            <select onChange={(e) => {handlerFilterName(e)}} > 
                <option value="asc">A - Z</option>
                <option value="dec">Z - A</option>
            </select>
            <select  onChange={(e) => {handlerFilterPopulation(e)}} > 
                <option value="asc">Menor poblacion</option>
                <option value="dec">Mayor poblacion</option>
            </select>
            <select onChange={(e) => {handlefilteredByActivity(e)}}>
                <option value="todas"> Actividades Turisticas </option>
                {activities.map((act) => (
                    <option value={act.name}>{act.name}</option>
                ))}
            </select>
            <select  onChange = {(e) => {handlerFilterContinents(e)}}>
                        <option value = "All"> filtrado por continente </option>
                        <option value = "Asia">Asia</option>
                        <option value = "South America">South America</option>
                        <option value = "North America">North America</option>
                        <option value = "Europe">Europe</option>
                        <option value = "Oceania">Oceania</option>
                        <option value = "Antarctica">Antarctica</option>
                        <option value = "Africa">Africa</option>
            </select>
               
            </div>       
             <div>
                <div>
                {currentCountries && currentCountries.map( e => {
            return (             
              <Card 
                    name={e.name}
                    flagsImg= {e.flagsImg}
                    continents={e.continents}
                    id={e.id}
                    key={e.id}
                />
            )})}
                </div>
            </div>

        <div>
        <Paginado 
                countriesPerPage = {countriesPerPage}
                todosLosPaises = {todosLosPaises.length}
                paginado = {paginado} />
        </div>
           

         
        </div>
</div> 
    )
}

export default Home; 