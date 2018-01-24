import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Scene, Stack, Router, TabBar, Modal, Schema, Actions, Reducer, BottomTabBar, Lightbox } from 'react-native-router-flux'

import MovieList, { MovieListLeftHeader, MovieListRightHeader } from './components/MovieList';

import Error from './components/Error';
import NavBar from './components/NavBar';
import FilterModal from './components/FilterModal';

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

const RouterComponent = () => {
    return (
        <Router navBar={NavBar} createReducer={reducerCreate} sceneStyle={{ backgroundColor: '#1d1d1d' }}>
            <Lightbox key="lightbox">
                <Stack key="root">
                    <Scene key="movieList" component={MovieList} title="Movies" left={<MovieListLeftHeader />} right={<MovieListRightHeader />} initial />           
                </Stack>
                <Scene key="error" component={Error} />
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;