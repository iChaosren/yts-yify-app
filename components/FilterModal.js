import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FilterModal extends Component {  
  state = {
    visible: true
  };

  render() {
    return (
    <Button onPress={() => { this.setState({visible: false}); }} title="Test Test Test" />
    );
  }
}
