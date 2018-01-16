import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class MovieList extends Component {
    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { movieList, query_term, page, loading, error } = state.moviesReducer;
    return {
        movieList,
        query_term,
        page,
        loading,
        error
    };
}

export default connect(mapStateToProps)(MovieList);