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
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_MOVIE_LIST:
            return { ...state, loading: true };
        case FETCH_SUCCESS_MOVIE_LIST:
            return { ...state };
        case FETCH_FAILED_MOVIE_LIST:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
