import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, BottomTabBar } from 'react-native-router-flux'

import MovieList from './components/MovieList';

import Error from './components/Error';
import NavBar from './components/NavBar';

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
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar>
                    <Scene key="movies">
                        <Scene key="movieList" component={MovieList} title="Movies" initial />
                    </Scene>                    
                </Scene>
                <Scene key="error" component={Error} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;