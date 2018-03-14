import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TouchableOpacity,
  View,Image
} from 'react-native';
import grid_icon from '../images/icons8-grid-24.png';
export default class HeaderMenu extends Component {
  render() {
    return (<View style={{flex:1,flexDirection:'row'}}>
              <Image source={grid_icon} style={{width:20}}/>
            <Text>Top box officle </Text>
            </View>
        );
        }
    }