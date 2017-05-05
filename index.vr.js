import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test-panoram.jpg')}/>
        <View style={{
            opacity: 1,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            transform: [{translate: [0, 0, -10]}],
        }}>
          {/*<Image
            source={asset('logo_og.png')}
            style={{width: 2, height: 1}}
          />*/}
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Hello, World!
          </Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
