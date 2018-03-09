/**
 * Created by gy on 2018/3/8.
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'; // New code
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import LocalImg from '../images'
import px2dp from '../util'
import { AppSizes, AppColors } from '../style';
const InputHeight = px2dp(45)

const containerWidth = AppSizes.screen.width - AppSizes.padding * 2;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image
              style={styles.head}
              source={LocalImg.login_head}
          />text
          <View style={styles.inputBack}>
            <Text style={styles.title}>
              账户
            </Text>
            <TextInput style={styles.input}>

            </TextInput>
          </View>
          <View style={styles.line}>
          </View>
          <View style={styles.inputBack}>
            <Text style={styles.title}>
              密码
            </Text>
            <TextInput style={styles.input}>

            </TextInput>
          </View>
          <View style={styles.line}>
          </View>

          <Text style={styles.welcome} onPress={() => Actions.homepage()}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: AppSizes.screen.height
  },
  head: {
    width: containerWidth,
    height: containerWidth * 0.86,
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: 0
  },
  inputBack: {
    flexDirection: 'row',
    alignItems: 'center',
    width: containerWidth * 0.95,
    height: containerWidth * 0.95 *0.16,
  },
  input: {
    flex: 4,
    height: InputHeight
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: AppColors.textColor3
  },
  line: {
    backgroundColor: '#EBEBEB',
    width: containerWidth * 0.95,
    height: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});