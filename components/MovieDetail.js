import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeLight, FontAwesomeBrands } from './FontAwesome5';

export class DownloadMovieRightHeader extends Component {
    render() {
        return (
            <TouchableOpacity>
                    <FontAwesomeLight name="download" size={22} color="#6ac045" style={{ backgroundColor: 'transparent' }} />
            </TouchableOpacity>
        );
    }
}

class MovieDetail extends Component {

    groupGenres(genres) {
        var out = '';

        for (var i = 0; i < genres.length; i++) {
            out += genres[i]

            if (i !== genres.length - 1)
                out += ' / ';
        }

        return out;
    }

    render() {
        const Spacer = () => <Text> </Text>;
        const movie = this.props.movieIndex[this.props.movie_id];

        return (
            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                <View>
                    <Image
                        style={styles.background}
                        source={{ uri: movie.large_cover_image }}
                    />
                </View>
                <LinearGradient
                    colors={['rgba(11,11,11,0.90)', 'rgba(11,11,11,0.95)', 'rgba(11,11,11,1.0)']}
                    locations={[0.0, 0.65, 1]}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    style={styles.background}
                />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollView}>
                    <TouchableOpacity onPress={() => Actions.imageModal({ uri: movie.large_cover_image })} >
                        <View style={styles.coverWrapper}>
                            <Image resizeMode='cover' style={styles.cover} source={{ uri: movie.large_cover_image }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>{movie.title_long}</Text>
                    <Text style={styles.text}>{this.groupGenres(movie.genres)}</Text>
                    <Spacer />
                    <Text style={styles.text}>{movie.summary}</Text>
                    <Spacer />
                    <Text style={styles.text}>Available Formats</Text>
                    <Spacer />
                    <Text style={styles.text}>Trailer</Text>
                    <Spacer />
                    <Text style={styles.text}>Screenshots</Text>
                    <Spacer />
                    <FontAwesomeBrands name="imdb" size={32} color="#F3CE00" />
                    <Text style={styles.text}>Rating Hover Next to Cover</Text>
                    <Spacer />
                    <TouchableOpacity>
                        <View style={styles.download}>
                            <FontAwesomeLight name="download" size={22} />
                            <Text style={styles.downloadText}>Download</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    background: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    scrollView: {
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontFamily: 'Open Sans',
        fontSize: 18,
        color: '#6ac045',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        color: '#666',
        textAlign: 'center'
    },
    cover: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width / 2,
        borderRadius: 4,
        backgroundColor: 'transparent'
    },
    coverWrapper: {
        padding: 4,
        borderRadius: 4,
        backgroundColor: "#1d1d1d"
    },
    download: {
        backgroundColor: '#6ac045',
        flexDirection: 'row',
        padding: 10,
        width: Dimensions.get('window').width - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 40,
        marginBottom: 10
    },
    downloadText: {
        fontSize: 18,
        fontFamily: 'Open Sans',
        padding: 5,
        marginLeft: 5
    }
};

const mapStateToProps = (state) => {
    const { movieIndex } = state.moviesReducer;

    return {
        movieIndex
    };
}

export default connect(mapStateToProps, {})(MovieDetail);
