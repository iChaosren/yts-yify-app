import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class MovieDetail extends Component {
    render() {
        const movie = this.props.movieIndex[this.props.movie_id];
        //console.log(this.props);
        //
        //colors={['rgba(0,0,0,0.8)','rgba(0,0,0,0.9)','rgba(0,0,0,0.95)']}
        /*
        <LinearGradient
                        colors={['#666','#333','#000']}
                        locations={[0.0, 0.75, 1]}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.0, y: 1.0 }}
                        style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, position: 'absolute', top:0, left:0, right: 0, bottom: 0 }}
                    >
                    </LinearGradient>
        */
        //background_image
        return (
            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                <View>
                    <Image
                        style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                        source={{ uri: movie.large_cover_image }}
                    />
                </View>
                <LinearGradient
                        colors={['rgba(11,11,11,0.90)','rgba(11,11,11,0.925)','rgba(11,11,11,0.95)']}
                        locations={[0.0, 0.75, 1]}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 0.0, y: 1.0 }}
                        style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, position: 'absolute', top:0, left:0, right: 0, bottom: 0 }}
                    />
                <ScrollView style={{ flex: 1 }}>
                    <Text style={{ color: '#fff' }}>{this.props.movie_id}</Text>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { movieIndex } = state.moviesReducer;

    return {
        movieIndex
    };
}

export default connect(mapStateToProps, {})(MovieDetail);
