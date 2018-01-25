import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class ImageModal extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: this.props.uri}} />
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
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: Dimensions.get('window').height - 80,
    width: Dimensions.get('window').width - 40,
    borderRadius: 4
  }
};

export default connect(null, {})(ImageModal);
