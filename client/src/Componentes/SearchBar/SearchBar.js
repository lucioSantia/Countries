
import React from "react"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameContry} from "../../redux/actions/index"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState(""); 

const handlerInputChange = (e) => { 
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}

const handlerSubmit = (e) => { 
    e.preventDefault()
    dispatch(getNameContry(name))

}
 

    return (
        <div> 
            <input 
                    type="text" 
                    placeholder="Buscar pais..."
                    onChange={(e) => handlerInputChange(e)}
                    />
            <button type="submit" onClick={(e)=> handlerSubmit(e)}>search</button>
        </div>
    )
}

export default SearchBar; 