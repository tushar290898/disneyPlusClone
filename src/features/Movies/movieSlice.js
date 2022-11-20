import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommend:null,
    newDisney:null,
    trending : null,
  };
  
  
  
  export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      setNewMovies: (state, action) => {
        state.recommend = action.payload.recommend;
        state.newDisney = action.payload.newDisney;
        state.trending = action.payload.trending;
      },
    
    },
  
  
  });
  
  export const { setNewMovies } = movieSlice.actions;
  
  // Selectors :- They allow us to pull information
  export const selectRecommend = (state) => state.movie.recommend;
  export const selectNewDisney = (state) => state.movie.newDisney;
  export const selectTrending = (state) => state.movie.trending;

  
  export default movieSlice.reducer;