import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-elements';

class MovieListItem extends Component {
    render() {
        const { 
            title,
            year,
            rating,
            large_cover_image
        } = this.props.movie;

        return (
            <TouchableOpacity>
                <Card                 
                    imageProps={{ resizeMode: 'cover', resizeMethod: 'scale' }}
                    imageStyle={{...this.props.imageStyle}}
                    imageWrapperStyle={{...this.props.imageWrapperStyle}}
                    image={{uri: large_cover_image}}
                    containerStyle={{...styles.cardContainer, ...this.props.style}} 
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
    }
};

export default MovieListItem;
