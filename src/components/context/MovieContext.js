import React, { createContext, useReducer } from 'react'

export const MovieContext = createContext();

const initialState = {
    popularMovies: [
        {
            id: 1,
            title: "Spongebob",
            genre: "Sci-fi",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil dolores provident facilis! Cupiditate excepturi iste sed dignissimos fugiat quasi!"
        }
    ]
}

const movieReducer = (state, action) => {
    
}

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    return ( 
        <MovieContext.Provider value={
            {popularMovies: state.popularMovies}
        }>
        {children}
        </MovieContext.Provider>
     );
}
 
