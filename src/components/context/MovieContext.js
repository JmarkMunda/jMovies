import React, { createContext, useReducer } from 'react'

export const MovieContext = createContext();


export const MovieProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");

    const searchMovie = {searchInput, setSearchInput}
    return ( 
        <MovieContext.Provider value={searchMovie}>
        {children}
        </MovieContext.Provider>
     );
}
 
