/**
 * Created by gy on 2018/3/8.
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import {AppSizes, AppColors} from '../style';
import LocalImg from '../images'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      discounts: [],
      dataList: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this._requestData()
  }

  _requestData = () => {
    //this.setState({refreshing: true});

    this.setState({
      dataList: [
        {
          id: '0',
          name: '1111'
        },
        {
          id: '1',
          name: '2222'
        },
        {
          id: '2',
          name: '3333'
        },
      ]
    })

  }

  _renderHeader = () => {
    return (
        <View style={styles.headView}>
          <View style={styles.head}>
            <View style={styles.headTop}>
              <Text style={styles.headTopText}>上海因犀利科技有限公司</Text>
            </View>
            <View style={styles.headCenter}>
              <Text style={styles.headCenterLLText}>累计成交金额(元)</Text>
              <Text style={styles.headCenterText}>22222</Text>
            </View>
            <View style={styles.headBottom}>
              <View style={styles.headBottomBack}>
                <Text style={styles.headBottomText}>今日成交订单</Text>
                <Text style={styles.headBottomData}>22</Text>
              </View>
              <View style={styles.headBottomLine}>
              </View>
              <View style={styles.headBottomBack}>
                <Text style={styles.headBottomText}>今日成交金额</Text>
                <Text style={styles.headBottomData}>22222</Text>
              </View>
            </View>
          </View>
          <View style={styles.todayViewBack}>
            <View style={styles.todayView}>
              <Text style={styles.todayTitle}>今日成交订单</Text>
              <Text style={styles.todayData}>5656</Text>
            </View>
            <View style={styles.todayView}>
              <Text style={styles.todayTitle}>今日成交金额</Text>
              <Text style={styles.todayData}>7878</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: '#F0F0F0',
            width: AppSizes.screen.width,
            height: 8,
          }}>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: AppSizes.screen.width,
            height: AppSizes.screen.width * 0.112,
          }}>
            <Image
                style={{
                  width: 35,
                  height: 35,
                  resizeMode: 'contain',
                  marginTop: 0,
                  marginBottom: 0
                }}
                source={LocalImg.login_head}
            />
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#666666'
            }}>有一份新的供货单需要及时处理</Text>
          </View>
          <View style={{
            backgroundColor: '#F0F0F0',
            width: AppSizes.screen.width,
            height: 1,
          }}>
          </View>
        </View>
    );
  }

  _renderCell = (info: Object) => {
    return (
        <View style={styles.cell} key={`${info.index}`}>
          <Text style={styles.cellText}>{info.item.name}</Text>
        </View>
    )
  }

  _keyExtractor = (item: Object, index: number) => {
    return item.id
  }

  render() {
    return (
        <View style={styles.container}>
          <FlatList
              data={this.state.dataList}
              renderItem={this._renderCell}
              keyExtractor={this._keyExtractor}
              onRefresh={this._requestData}
              refreshing={this.state.refreshing}
              ListHeaderComponent={this._renderHeader}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headView: {
    backgroundColor: 'white',
    height: AppSizes.screen.width * 1.55
  },
  head: {
    backgroundColor: '#3699FF',
    height: AppSizes.screen.width * 0.63
  },
  headTop: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44
  },
  headTopText: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  headCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headCenterLLText: {
    fontSize: 13,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
    marginTop: 25,
  },
  headCenterText: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    marginBottom: 20,
  },
  headBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    height: AppSizes.screen.width * 0.187,
  },
  headBottomLine: {
    backgroundColor: 'white',
    width: 1,
    height: AppSizes.screen.width * 0.08,
    opacity: 0.6
  },
  headBottomBack: {
    flex: 1,
    overflow: 'hidden'
  },
  headBottomText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9
  },
  headBottomData: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  todayViewBack: {
    flexDirection: 'row',
    height: AppSizes.screen.width * 0.13,
  },
  todayView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todayTitle: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    opacity: 0.9,
    marginLeft: 10
  },
  todayData: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5
  },


  cell: {
    backgroundColor: 'red',
    height: 50,
  },
  cellText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  }
});