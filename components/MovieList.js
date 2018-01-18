import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, ActivityIndicator, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { AdMobBanner } from 'expo';

import { FontAwesomeLight } from './FontAwesome5';

import { fetchMovieList } from '../actions/MovieListActions';

import MovieListItem from './MovieListItem';

class MovieList extends Component {

    componentWillMount() {
        //console.log(this.props)
        this.props.fetchMovieList({});
    }

    renderModal() {
        if (this.props.error)
            return (
                <View style={styles.loadingModalContainer} >
                    <View style={{ ...styles.loadingModalWrapper, backgroundColor: 'rgba(200,35,51,0.8)', width: (Dimensions.get('window').width - 40), height: undefined }}>
                        <FontAwesomeLight name='exclamation-triangle' size={18} color="rgba(255,255,255,0.8)" style={{ paddingLeft: 6, paddingRight: 6 }} />
                        <Text style={{ ...styles.errorText, color: 'rgba(255,255,255,0.8)' }}>{this.props.error}</Text>
                    </View>
                </View>
            );

        if (this.props.loading)
            return (
                <View style={styles.loadingModalContainer} >
                    <View style={styles.loadingModalWrapper}>
                        <ActivityIndicator size="small" color="rgba(23, 23, 23, 0.8)" />
                        <Text style={styles.loadingText}>Loading</Text>
                    </View>
                </View>
            );
    }

    onSearchChange(text) {
        this.props.fetchMovieList({ page: 1, query_term: text });
    }

    render() {

        console.log(this.state)
        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    containerStyle={styles.searchBarContainer}
                    inputStyle={styles.searchBarInput}
                    placeholder='Search...'
                    placeholderTextColor='rgba(106, 192, 69, 0.45)'
                    showLoadingIcon={this.props.loading && this.props.query_term !== ''}
                    icon={{ color: 'rgba(106, 192, 69, 0.45)' }}
                    onChangeText={this.onSearchChange.bind(this)}
                    value={(this.props.query_term || '')}
                    round
                />
                <FlatList
                    contentContainerStyle={styles.scrollViewContent}
                    keyExtractor={(item, index) => item.id}
                    numColumns={2}
                    data={this.props.movieList}
                    extraData={this.state}
                    renderItem={({ item }) => <MovieListItem
                        //key={item.id}
                        //movie={item}
                        id={item.id}
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                        large_cover_image={item.large_cover_image}
                    />}
                    onEndReached={() => {
                        if (!this.props.loading && this.props.movieList.length < this.props.movie_count) {
                            this.props.loading = true;
                            this.props.fetchMovieList({ page: this.props.page + 1, query_term: this.props.query_term });
                        }

                        console.log('Triggered...')
                    }}
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={() => {
                        if (!this.props.loading)
                            return (
                                <View style={styles.emptyContainer}>
                                    <FontAwesomeLight name="bomb" size={18} color='rgba(200,35,51,0.8)' />
                                    <Text style={styles.emptyText}> Nothing to show...</Text>
                                </View>
                            );
                        else
                            return <View />
                    }}
                    ListFooterComponent={
                        <View style={styles.adBanner}>
                            <AdMobBanner
                                bannerSize="smartBannerLandscape"
                                adUnitID={Platform.select({ ios: 'ca-app-pub-3964494109532932/9046758779', android: 'ca-app-pub-3964494109532932/5421185019' })}
                                didFailToReceiveAdWithError={this.bannerError} />
                        </View>
                    }
                />
                {this.renderModal()}
            </View>
        );
    }
}

const styles = {
    searchBarContainer: {
        backgroundColor: '#171717',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 3 },
                shadowOpacity: 0.35,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            },
        })
    },
    searchBarInput: {
        backgroundColor: '#1d1d1d',
        fontFamily: 'Open Sans'
    },
    scrollViewContent: {
        margin: 0,
        padding: 4,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    loadingModalContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 20,
        alignItems: 'center',
    },
    loadingModalWrapper: {
        height: 34,
        width: 110,
        padding: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(106, 192, 69, 0.8)',
        flexDirection: 'row',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
    },
    loadingText: {
        color: "rgba(23, 23, 23, 0.8)",
        marginLeft: 10,
        fontFamily: 'Open Sans'
    },
    emptyContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        padding: 20
    },
    emptyText: {
        fontFamily: 'Open Sans',
        color: 'rgba(200,35,51,0.8)'
    },
    adBanner: {
        width: Dimensions.get('window').width
    }
};

const mapStateToProps = (state) => {
    const { movieList, query_term, page, loading, error, movie_count } = state.moviesReducer;

    return {
        movieList,
        query_term,
        page,
        loading,
        error,
        movie_count
    };
}

export default connect(mapStateToProps, { fetchMovieList })(MovieList);