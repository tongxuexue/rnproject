/**
 * Created by gy on 2018/3/8.
 */

import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux'; // New code

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import HttpUtil from '../service/HttpUtil'
import Api from '../service/api'
import LocalImg from '../images'
import px2dp from '../util'
import {AppSizes, AppColors} from '../style';
const InputHeight = px2dp(45)

const containerWidth = AppSizes.screen.width - AppSizes.padding * 2;


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameText: '',
      passwordText: ''
    };
  }

  _confirm() {
    const params = {
      mobile: this.state.nameText,
      password: this.state.passwordText,
    };
    //console.log(params);
    Actions.homepage();
    HttpUtil.postFatch(Api.login_url, params)
        .then((json) => {
          Actions.homepage();
        }, (json) => {
        })
        .catch((error) => {
          //TODO 处理请求fail
        });

  }

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
            <TextInput style={styles.input} onChangeText={(text) => this.setState({nameText: text})}>
            </TextInput>
          </View>
          <View style={styles.line}>
          </View>
          <View style={styles.inputBack}>
            <Text style={styles.title}>
              密码
            </Text>
            <TextInput style={styles.input } onChangeText={(text) => this.setState({passwordText: text})}>

            </TextInput>
          </View>
          <View style={styles.line}>
          </View>
          <TouchableHighlight style={styles.confirm} onPress={() => this._confirm()}>
            <Text style={styles.confirmText}>登 录</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
    height: containerWidth * 0.95 * 0.16,
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
  confirm: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009CFA',
    marginTop: 20,
    width: AppSizes.screen.width * 0.8,
    height: px2dp(45),
    borderColor: '#009CFA',
    borderWidth: 1,
    borderRadius: 5
  },
  confirmText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});