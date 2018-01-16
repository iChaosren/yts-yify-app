import React, { Component } from 'react';
import { StyleSheet, Platform, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { tintColor } from "../constants/Colors";

export default class NavBar extends Component {
    render() {
        //'#8e95cc', '#afa1c6', '#dbb1c3'
        return (<LinearGradient
            colors={['#1d1d1d','#171717','#0d0d0d']}
            locations={[0.0, 0.35, 1]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}
            style={styles.container}
        >
            <Text style={{
                backgroundColor: 'transparent',
                color: '#6ac045',
                textShadowColor: '#000',
                textShadowOffset: { height: 1, width: 1 },
                textShadowRadius: 2,
                fontSize: 18,                
                fontFamily: 'Open Sans Light',
                lineHeight: 23
            }}>{this.props.title}</Text>
        </LinearGradient>);
    }
}

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
                paddingBottom: 22
            },
            android: {
                elevation: 20,
                height: 76,
                paddingTop: 38,
                paddingBottom: 12
            },
        }),
        alignItems: 'center',        
    }
});
