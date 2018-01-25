import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class FilterModal extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>
        <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Text style={{ color: "#fff" }}>Close Lightbox</Text>
          </TouchableOpacity>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    height: 64,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#1d1d1d'
  }
};

export default connect(null, {})(FilterModal);
