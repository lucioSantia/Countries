
const initialState = {
  allCountries: [], 
  activities : [], 
  filteredContries : [],
  detail: {ActividadTuristicas: []}
 
 }; 

function rootReducer (state = initialState, action){
  switch(action.type){
      case "GET_COUNTRYS":
          return {
              ...state,
              allCountries: action.payload, 
              filteredContries: action.payload,
          }
      case "FILTER_COUNTRIES":
       const allCountries = state.allCountries;
       console.log(allCountries)
       if (action.payload === "All"){
          return {
              ...state,
             filteredContries: allCountries
          }
       } else {
        const paisesFiltrados = allCountries.filter( el => el.continents === action.payload)
        console.log(paisesFiltrados)
              return {
                  ...state,
                  filteredContries: paisesFiltrados,
              }
          }
      case "ORDER_ALF":
          // trabajando sobre copia (metodo slice()) del array filteredContries; 
          const filteredContries = state.allCountries.slice(); 
          action.payload === 'asc' ?
          filteredContries.sort((a, b) => {
            if(a.name > b.name) {
              return 1
            } else if (b.name > a.name) {
              return -1
            } else {
              return 0
            }}) : 
            filteredContries.sort((a, b) => {
            if(a.name > b.name) {
              return -1
            } else if (b.name > a.name) {
              return 1
            } else {
              return 0
            }}) 
          //   console.log(sortedByName)
          // sortedByName.push(sortedByName[0])

      return {
          ...state,
          filteredContries: filteredContries
      }

      case "ORDER_POPULATION": 
      const filteredPopulation = state.allCountries.slice(); 
      action.payload === "asc" ? 
      filteredPopulation.sort((a, b) => {
          if (a.population > b.population) {
            return 1;
          }
          if (b.population > a.population) {
            return -1;
          }
            return 0;
            
      })
      :  filteredPopulation.sort((a, b) => {
          if (a.population > b.population) {
            return -1;
          }
          if (b.population > a.population) {
            return 1;
          }
            return 0;
      });
    return {
        ...state,
        filteredContries: filteredPopulation,
    };  
    case  "GET_NAME_CONTRY": 
      return {
        ...state,
        filteredContries : action.payload
      } 
      case "POST_ACTIVITIES": 
        return {
          ...state, 
        }
        case "GET_ACTIVITIES":
          return {
              ...state,
              activities: action.payload,
          }  
          case "GET_COUNTRY_DETAIL": 
          return{
            ...state,
            detail: action.payload 
          }
          case "FILTER_BY_ACTIVITIE": 
          const allCountriesActivities = state.allCountries;
          let filtrado
           if(action.payload === "todas" ){
             filtrado = allCountriesActivities.filter((el) => 
              el.ActividadTuristicas.length
             ) 
             console.log(filtrado)
           }  else {
            // console.log("esto me llega en action.payload", action.payload)
            filtrado = allCountriesActivities.filter(el => el.ActividadTuristicas.some(({name}) => name === action.payload))
            // console.log("esto me llega en la variable filtrado",filtrado)
           } 
          
            return {
          ...state,
          filteredContries: filtrado 
         }
         
       

              
          default:
              return state;
       }
}

export default rootReducer;