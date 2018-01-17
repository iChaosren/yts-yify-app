import axios from 'axios';
import {
    FETCHING_MOVIE_LIST, FETCH_SUCCESS_MOVIE_LIST, FETCH_FAILED_MOVIE_LIST
} from '../constants/ActionTypes';
import {
    base_url,
    list_movies
} from '../constants/Api';

export const fetchMovieList = ({ page, query_term }) =>  {    
    return (dispatch) => {
        dispatch({
            type: FETCHING_MOVIE_LIST
        });

        if(!page)
            page = 1;
        
        if(!query_term)
            query_term = '';

        axios.get(base_url + list_movies, {
            params: {
              page,
              query_term
            }
          })
          .then(function (response) {
            dispatch({
                type: FETCH_SUCCESS_MOVIE_LIST,
                payload: response.data
            });
          })
          .catch(function (error) {
            dispatch({
                type: FETCH_FAILED_MOVIE_LIST,
                payload: error
            });
          });
    }; 
}