import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.countHour}>
        <View style={styles.countHourTitle}>
          <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車時間</Text>
        </View>
        <View style={styles.countHourMinutes}>
          <Text style={{fontSize: 40, color: '#EEEEEE'}}>
            20時間30分 <Icon name="repeat" size={40} />
          </Text>
        </View>
      </View>
      <View style={styles.parkingMap}>
        <View style={styles.mapRow}>
        {/* 1行目 */}
          <Text style={styles.mapButton} onPress={() => {console.log('aiueo')}}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
        {/* 2行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 3行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 4行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 5行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 6行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 7行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButton}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 8行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 9行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 10行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 11行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 12行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 13行目 */}
          <Text style={styles.mapButton}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
          <Text style={styles.mapButtonHidden}>01</Text>
        </View>
      </View>
      <View style={styles.floorLevelTabWrapper}>
        <View style={styles.levelTab}><Text>3F</Text></View>
        <View style={styles.levelTab}><Text>2F</Text></View>
      </View>
      <View style={styles.parkingInformation}>
        <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車場所：2F 35</Text>
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
    backgroundColor: '#222222'
  },
  countHourTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  countHourMinutes: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parkingMap: {
    flex: 5,
    padding: 5,
    backgroundColor: '#444444'
  },
  mapRow: {
    flex: 1,
    flexDirection: 'row',
  },
  mapButton: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    overflow: 'hidden',
    padding: 10,
    margin: 1,
    borderWidth: 1,
  },
  mapButtonHidden: {
    flex: 1,
    padding: 10,
    margin: 1,
    borderRadius: 20,
    borderWidth: 1,
    opacity: 0
  },
  floorLevelTabWrapper: {
    flex: 0.3,
    flexDirection: 'row-reverse',
    backgroundColor: '#222222'
  },
  levelTab: {
    backgroundColor: "#EEEEEE",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  parkingInformation: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222'
  }
  
});
