import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Scene, Stack, Router, TabBar, Modal, Schema, Actions, Reducer, BottomTabBar, Lightbox } from 'react-native-router-flux'
import { connect } from 'react-redux';

import MovieList, { MovieListLeftHeader, MovieListRightHeader } from './components/MovieList';

import Error from './components/Error';
import NavBar from './components/NavBar';
import FilterModal from './components/FilterModal';
import MovieDetail, { DownloadMovieRightHeader } from './components/MovieDetail';
import HeaderBack from './components/HeaderBack';
import ImageModal from './components/ImageModal';

const RouterComponent = () => {
    return (
        <Router navBar={NavBar} sceneStyle={{ backgroundColor: '#1d1d1d' }}>
            <Lightbox key="lightbox">
                <Stack key="root">
                    <Scene key="movieList" component={MovieList} title="Movies" left={<MovieListLeftHeader />} right={<MovieListRightHeader />} initial />
                    <Scene key="movieDetail" component={MovieDetail} left={<HeaderBack />} right={<DownloadMovieRightHeader />} />           
                </Stack>
                <Scene key="error" component={Error} />
                <Scene key="filterModal" component={FilterModal} />
                <Scene key="imageModal" component={ImageModal} />
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;
