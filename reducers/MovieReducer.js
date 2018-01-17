import {
    FETCHING_MOVIE_LIST,
    FETCH_FAILED_MOVIE_LIST,
    FETCH_SUCCESS_MOVIE_LIST
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    movieList: [],
    page: 1,
    query_term: '',
    error: '',
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_MOVIE_LIST:
            return { ...state, loading: true };
        case FETCH_SUCCESS_MOVIE_LIST:

            var allMovies = state.movieList.concat(action.payload.data.movies);
            var adjustedMovieList = [];
            var existingIds = [];

            for(var i = 0; i < allMovies.length; i++)
            {
                if(existingIds[allMovies[i].id])
                    continue;
                
                adjustedMovieList.push(allMovies[i]);
                existingIds[allMovies[i].id] = true;
            }

            return { 
                ...state,                 
                movieList: adjustedMovieList,
                loading: false,
                page: action.payload.data.page_number
            };
        case FETCH_FAILED_MOVIE_LIST:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
