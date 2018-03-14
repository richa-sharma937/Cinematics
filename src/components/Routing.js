import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
  } from 'react-native-router-flux';
  import TabView from './TabView';
  import HeaderMenu from './HeaderMenu';
  const Routing = () => {
    return (
      <Router 
      // navigationBarStyle={styles.navBar} 
      // titleStyle={styles.navBarTitle} 
      // barButtonTextStyle={styles.barButtonTextStyle} 
      //     barButtonIconStyle={styles.barButtonIconStyle}
          
          >
        <Drawer
              key="drawer"
              drawerWidth={300}
            >
           <Scene key="tabs" component={TabView} title={HeaderMenu} />
               
        </Drawer>
    </Router>
    );
    }
  
    export default Routing;
    const styles = StyleSheet.create({
      navBar: {
        backgroundColor:'#1b1b21',
      },
      navBarTitle:{
        color:'#FFFFFF'
      },
      barButtonTextStyle:{
        color:'#FFFFFF'
      },
      barButtonIconStyle:{
        tintColor:'rgb(255,255,255)'
      }
    });