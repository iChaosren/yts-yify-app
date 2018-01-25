import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesomeLight } from './FontAwesome5';
import { Actions } from 'react-native-router-flux';

export default class HeaderBack extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Actions.pop()} >
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <FontAwesomeLight name="chevron-left" size={20} color="#6ac045" style={{ backgroundColor: 'transparent' }} />
                    <Text style={{ backgroundColor: 'transparent', color: '#6ac045', fontSize: 16, fontFamily: 'Open Sans Light', paddingLeft: 6, lineHeight: 20 }}> Back</Text>
                </View>

            </TouchableOpacity>
        );
    }
}
