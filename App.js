import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.countHour}>
        <View style={styles.countHourTitle}>
          <Text style={{fontSize: 20}}>駐車時間</Text>
        </View>
        <View style={styles.countHourMinutes}>
          <Text style={{fontSize: 40}}>
            20時間30分 <Icon name="repeat" size={40} />
          </Text>
        </View>
      </View>
      <View style={styles.parkingMap}>
        <Text>マップ</Text>
      </View>
      <View style={styles.parkingInformation}>
        <Text style={{fontSize: 20}}>駐車場所：2F 35</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countHour: {
    flex: 2,
  },
  countHourTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  countHourMinutes: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parkingMap: {
    flex: 5,
  },
  parkingInformation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
