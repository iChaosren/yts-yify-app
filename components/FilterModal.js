import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Platform, Picker, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import DropDownButton from './DropDownButton';

class FilterModal extends Component {
  state = {
    quality: '',
    genre: '',
    rating: '',
    sort_by: '',
    displayed: ''
  }

  renderQuality() {
    if (this.state.displayed === 'quality')
      return (
        <Picker
          itemStyle={{ color: '#6ac045' }}
          selectedValue={this.state.quality}
          onValueChange={(itemValue, itemIndex) => this.setState({ quality: itemValue })}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="1080p" value="1080p" />
          <Picker.Item label="720p" value="720p" />
          <Picker.Item label="3D" value="3D" />
        </Picker>
      );
  }

  render() {
    return (
      <View style={{ ...styles.container, flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Actions.pop()}>
          <View style={styles.container} />
        </TouchableWithoutFeedback>

        <View style={styles.wrapper}>
          <Text style={styles.text}>Quality</Text>
          <DropDownButton>
            All
          </DropDownButton>

          <Text style={styles.text}>Genre</Text>
          <DropDownButton>
            All
          </DropDownButton>

          <Text style={styles.text}>Rating</Text>
          <DropDownButton>
            All
          </DropDownButton>

          <Text style={styles.text}>Sort By</Text>
          <DropDownButton>
            Latest
          </DropDownButton>

          <Text style={styles.text}>Order</Text>
          <Switch />

          {this.renderQuality()}
        </View>
      </View>
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
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  wrapper: {
    paddingTop: 30,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#1d1d1d',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4
      },
      android: {
        elevation: 20
      },
    })
  },
  text: {
    color: '#6ac045',
    fontFamily: 'Open Sans SemiBold',
    fontSize: 16,
    textAlign: 'center',
    margin: 6,
    textShadowColor: '#000',
    textShadowOffset: { height: 1, width: 1 },
    textShadowRadius: 2,
  }
};

export default connect(null, {})(FilterModal);
