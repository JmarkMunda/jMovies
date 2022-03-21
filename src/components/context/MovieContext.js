import React, { createContext, useReducer } from 'react'

export const MovieContext = createContext();

const initialState = () => {
    movieDetails: []
}

const movieReducer = (state, action) => {
    
}

export default MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    return ( 
        <MovieContext.Provider value={
            {movieDetails: state.movieDetails}
        }>
        {children}
        </MovieContext.Provider>
     );
}
 
