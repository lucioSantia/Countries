import axios from "axios"; 

export const getCountries = () => {
    return async function(dispatch){
        var json = await axios("http://localhost:3001/countries")
        
        return dispatch({
            type: "GET_COUNTRYS",
            payload: json.data
        })
    }
}

 export const filterCountries = (payload) => { 
    console.log(payload) 
    return {
        type: "FILTER_COUNTRIES", 
        payload 
    }
}

export const getActivities = () => {
    return async function (dispatch){
        const getAllActivities = await axios.get("http://localhost:3001/activities")
        return dispatch ({
            type: "GET_ACTIVITIES",
            payload: getAllActivities.data
        })    
    }     
}

export const postActivities = (payload) => {
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/activities", payload);
        return response; 
    }
}

export const orderByName = (payload) =>  {
    return {
        type: "ORDER_ALF",
        payload
    }
}
 
export const orderByPopulation = (payload) =>  {
    return {
        type: "ORDER_POPULATION",
        payload
    }
}


export const getNameContry = (name) => {
    return async function (dispatch){
            var json = await axios.get("http://localhost:3001/countries?name=" + name);
            return dispatch ({
                type: "GET_NAME_CONTRY",
                payload: json.data
            })
    } 
}

export const getCountriDetail = (id) => {
    return async function (dispatch){
        var info = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: "GET_COUNTRY_DETAIL",
            payload: info.data
        }) 
    }
} 

export const filterByActivity= (activitie) => {
    return {
        type: "FILTER_BY_ACTIVITIE",
        payload: activitie
    }
}