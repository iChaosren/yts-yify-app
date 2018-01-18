import axios from 'axios';
import {
    FETCHING_MOVIE_LIST, FETCH_SUCCESS_MOVIE_LIST, FETCH_FAILED_MOVIE_LIST
} from '../constants/ActionTypes';
import {
    base_url,
    list_movies
} from '../constants/Api';

export const fetchMovieList = ({ page, query_term }) =>  {    
    return async (dispatch) => {
        if(!query_term)
            query_term = '';

        dispatch({
            type: FETCHING_MOVIE_LIST,
            payload: query_term
        });

        if(!page)
            page = 1;

        axios.get(base_url + list_movies, {
            params: {
              page,
              query_term
            }
          })
          .then(function (response) {
              console.log('received response')
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