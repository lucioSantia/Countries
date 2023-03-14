import React from "react";

 const Paginado = ({countriesPerPage, todosLosPaises, paginado}) => {
    const pageNumbers = []; 
    for (let i = 1; i <= Math.ceil(todosLosPaises/countriesPerPage); i++) {
        pageNumbers.push(i)        
    }
    return (
       
         <nav>
           <ul>
                {pageNumbers && pageNumbers.map(n => (
                     <li  key={n} >
                     <button onClick={() => paginado(n) }>{n}</button>
                  </li>            
                ))}
            </ul> 
        </nav>
       
        
    )
 }

 export default Paginado;