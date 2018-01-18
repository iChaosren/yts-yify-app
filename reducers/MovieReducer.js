import {
    FETCHING_MOVIE_LIST,
    FETCH_FAILED_MOVIE_LIST,
    FETCH_SUCCESS_MOVIE_LIST
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    movieList: [],
    movieIndex: [],
    page: 1,
    query_term: '',
    error: '',
    loading: true,
    movie_count: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_MOVIE_LIST:
            return { ...state, loading: true, query_term: (action.payload || '') };
        case FETCH_SUCCESS_MOVIE_LIST:
            var mList = state.movieList;
            if (state.query_term && action.payload.data.page_number === state.page) {
                mList = [];
                console.log('Changed Query Term');
            }
            else
                if (state.query_term) {
                    console.log('Changed Page of Query Term')
                }

            var allMovies;
            if (action.payload.data.movies)
                allMovies = mList.concat(action.payload.data.movies);
            else
                allMovies = mList;
            var adjustedMovieList = [];
            var existingIds = [];
            var movieIndexed = [];

            if (!allMovies[0])
                allMovies = [];

            for (var i = 0; i < allMovies.length; i++) {
                if (existingIds[allMovies[i].id])
                    continue;

                adjustedMovieList.push(allMovies[i]);
                existingIds[allMovies[i].id] = true;
                movieIndexed[allMovies[i].id] = allMovies[i];
            }

            return {
                ...state,
                movieList: adjustedMovieList,
                movieIndex: movieIndexed,
                loading: false,
                page: action.payload.data.page_number,
                movie_count: action.payload.data.movie_count
            };
        case FETCH_FAILED_MOVIE_LIST:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
