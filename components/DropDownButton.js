import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { FontAwesomeLight } from './FontAwesome5';

class DropDownButton extends Component {

    renderIcon() {
        var icon = '';

        if (this.props.isOpen)
            icon = 'chevron-up'
        else
            icon = 'chevron-down'

        return (
            <FontAwesomeLight name={icon} size={18} color="#6ac045" style={{ ...styles.icon, ...this.props.iconStyle }} />
        );
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{ ...styles.container, ...this.props.containerStyle }}>
                    <Text style={{ ...styles.text, ...this.props.textStyle }}>{this.props.children}</Text>
                    {this.renderIcon()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        borderColor: '#6ac045',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        margin: 6,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 2, width: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3
            },
            android: {
                elevation: 5
            },
        })
    },
    text: {
        color: '#6ac045',
        fontFamily: 'Open Sans Light',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 2,
    },
    icon: {
        position: 'absolute',
        right: 12,
        textShadowColor: '#000',
        textShadowOffset: { height: 1, width: 1 },
        textShadowRadius: 2,
    }
};

export default DropDownButton;