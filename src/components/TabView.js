import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TouchableOpacity,
  View,Image
} from 'react-native';
import ScrollableTabView from'react-native-scrollable-tab-view';
import Nowplaying from './NowPlaying';
import Topboxoffice from './TopBoxOffice';
export default class TabView extends Component {
  render() {
    return (
        <ScrollableTabView tabBarBackgroundColor="#1b1b21" 
        tabBarActiveTextColor="#FFFFFF" 
        tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 17, color:"white"}}
        tabBarUnderlineStyle={{backgroundColor:"green"}}
        initialPage={0}
        // renderTabBar={() => <ScrollableTabBar />}
    >
        <Nowplaying tabLabel="Now Playing" />
        <Topboxoffice tabLabel="Top Box Office" />
        <Nowplaying tabLabel="Anticipated" />
      </ScrollableTabView>
        );
        }
    }