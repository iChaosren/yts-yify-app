import React, { Component, PureComponent } from 'react';
import { View, Text, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

class MovieListItem extends PureComponent {

    render() {
        const { 
            title,
            year,
            rating,
            large_cover_image
        } = this.props;
        
        return (
            <TouchableOpacity>
                <Card                 
                    imageProps={{ resizeMode: 'cover', resizeMethod: 'scale' }}
                    imageStyle={{...styles.movieImageStyle}}
                    imageWrapperStyle={{...styles.movieImageWrapperStyle}}
                    image={{uri: large_cover_image}}
                    containerStyle={{...styles.cardContainer, ...styles.movieItem}} 
                    wrapperStyle={styles.cardWrapper}
                >
                    <Text style={styles.text}>{title}</Text>
                    <Text style={{...styles.text, fontFamily: 'Open Sans Italic'}}>{year}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = {
    cardContainer: {
        margin: 0,
        borderWidth: 0,
        backgroundColor: 'rgba(23, 23, 23, 0.8)',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 2, width: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            },
        })
    },
    cardWrapper: {
        padding: 5,        
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'space-around'
    },
    text: {
        color: 'rgba(106, 192, 69, 0.8)',
        fontFamily: 'Open Sans',
        textAlign: 'center',                
    },    
    movieItem: {
        width: (Dimensions.get('window').width / 2) - 16,
        margin: 4,
        marginTop: 8,
        marginBottom: 6,
        borderRadius: 4
    },
    movieImageStyle: {
        width: (Dimensions.get('window').width / 2) - 16,
        height: (Dimensions.get('window').height / 2) - 76,
    },
    movieImageWrapperStyle: {

    },
};

export default MovieListItem;
