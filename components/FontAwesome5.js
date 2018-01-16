import React, { Component } from 'react';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
import SolidGlyphMap from '../assets/fonts/FontAwesomeSolid.json';
import RegularGlyphMap from '../assets/fonts/FontAwesomeRegular.json';
import LightGlyphMap from '../assets/fonts/FontAwesomeLight.json';
import BrandsGlyphMap from '../assets/fonts/FontAwesomeBrands.json';
const SolidIcon = createIconSet(SolidGlyphMap, 'Font Awesome 5 Solid');
const RegularIcon = createIconSet(RegularGlyphMap, 'Font Awesome 5 Regular');
const LightIcon = createIconSet(LightGlyphMap, 'Font Awesome 5 Light');
const BrandIcon = createIconSet(BrandsGlyphMap, 'Font Awesome 5 Brands');

export class FontAwesomeSolid extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Font Awesome 5 Solid': require('../assets/fonts/fa-solid-900.ttf')
    });

    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <SolidIcon name={this.props.name} size={this.props.size || 32} color={this.props.color || '#000'} style={this.props.style} />
    );
  }
}

export class FontAwesomeRegular extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Font Awesome 5 Regular': require('../assets/fonts/fa-regular-400.ttf')
    });

    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <RegularIcon name={this.props.name} size={this.props.size || 32} color={this.props.color || '#000'} style={this.props.style} />
    );
  }
}

export class FontAwesomeLight extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Font Awesome 5 Light': require('../assets/fonts/fa-light-300.ttf')
    });

    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <LightIcon name={this.props.name} size={this.props.size || 32} color={this.props.color || '#000'} style={this.props.style} />
    );
  }
}

export class FontAwesomeBrands extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Font Awesome 5 Brands': require('../assets/fonts/fa-brands-400.ttf')
    });

    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <BrandIcon name={this.props.name} size={this.props.size || 32} color={this.props.color || '#000'} style={this.props.style} />
    );
  }
}
