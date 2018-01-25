import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { tintColor } from "../constants/Colors";

class NavBar extends Component {
    render() {        
        //'#8e95cc', '#afa1c6', '#dbb1c3'
        return (<LinearGradient
            colors={['#1d1d1d','#171717','#0d0d0d']}
            locations={[0.0, 0.35, 1]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            style={styles.container}
        >

        <View style={styles.left}>
            {this.props.left}
        </View>

        <View style={styles.center}>
            <Text style={{
                backgroundColor: 'transparent',
                color: '#6ac045',
                textShadowColor: '#000',
                textShadowOffset: { height: 1, width: 1 },
                textShadowRadius: 2,
                fontSize: 18,                
                fontFamily: 'Open Sans Light',
                lineHeight: 23,
            }} 
            numberOfLines={1} 
            ellipsizeMode='tail'>{this.props.title}</Text>
        </View>

        <View style={styles.right}>
            {this.props.right}
        </View>

        </LinearGradient>);
    }
}

/*<Text style={{
                backgroundColor: 'transparent',
                color: '#6ac045',
            }}>right</Text>*/

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 3 },
                shadowOpacity: 0.15,
                shadowRadius: 3,
                height: 64,
                paddingTop: 28,
                paddingBottom: 14
            },
            android: {
                elevation: 20,
                height: 76,
                paddingTop: 38,
                paddingBottom: 12
            },
        }),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    left: {
        paddingLeft: 10,
        flex: 1,
        alignItems: 'flex-start',
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    right: {
        paddingRight: 10,
        alignItems: 'flex-end',
        flex: 1
    }
});

export default connect(null, {})(NavBar);
