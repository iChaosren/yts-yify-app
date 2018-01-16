import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, ActivityIndicator, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

import { FontAwesomeLight } from './FontAwesome5';

class MovieList extends Component {

    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    }

    renderModal() {            
        if(this.props.error)
            return (
                <View style={styles.loadingModalContainer} >
                    <View style={{...styles.loadingModalWrapper, backgroundColor: 'rgba(200,35,51,0.8)', width: (Dimensions.get('window').width - 40), height: undefined }}>
                        <FontAwesomeLight name='exclamation-triangle' size={18} color="rgba(255,255,255,0.8)" style={{ paddingLeft: 6, paddingRight: 6 }} />
                        <Text style={{...styles.errorText, color: 'rgba(255,255,255,0.8)'}}>{this.props.error}</Text>
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    containerStyle={styles.searchBarContainer}
                    inputStyle={styles.searchBarInput}
                    placeholder='Search...'
                    placeholderTextColor='rgba(106, 192, 69, 0.45)'
                    showLoadingIcon={this.props.loading && this.props.query_term}
                    icon={{ color: 'rgba(106, 192, 69, 0.45)' }}
                    round
                />
                <ScrollView
                    onScroll={({ nativeEvent }) => {
                        if (this.isCloseToBottom(nativeEvent)) {
                            console.log('Bottom Reached - Loading: ' + this.props.loading)
                        }
                    }}
                    scrollEventThrottle={400}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    
                </ScrollView>
                {this.renderModal()}
            </View>
        );
    }
}

const styles = {
    searchBarContainer: {
        backgroundColor: '#171717'
    },
    searchBarInput: {
        backgroundColor: '#1d1d1d'
    },
    scrollViewContent: {

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
        marginLeft: 10
    }
};

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