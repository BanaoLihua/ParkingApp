import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Map2nd from './src/map2nd';
import Map3rd from './src/map3rd';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countHour}>
        <View style={styles.countHourTitle}>
          <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車時間</Text>
        </View>
        <View style={styles.countHourMinutes}>
          <Text style={{fontSize: 40, color: '#EEEEEE'}}>
            20時間30分 <Icon name="repeat" size={40} onPress={openModal} />
          </Text>
        </View>
      </View>

      <Map2nd />
      
      <View style={styles.floorLevelTabWrapper}>
        <View style={styles.levelTab}><Text>3F</Text></View>
        <View style={styles.levelTab}><Text>2F</Text></View>
      </View>
      <View style={styles.parkingInformation}>
        <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車場所：2F 35</Text>
      </View>

      <Modal isVisible={isModalVisible} hasBackdrop={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalParkingTime}>
            <Text style={styles.modalParkingTimeText}>08/03 20:38</Text>
          </View>
          
          <Map2nd />

          <View style={styles.modalParkingTabWrapper}>
              <View style={styles.modalParkingTabs}><Text>3F</Text></View>
              <View style={styles.modalParkingTabs}><Text>2F</Text></View>
          </View>
          <View style={styles.modalButtonsWrapper}>
            <TouchableOpacity onPress={closeModal} style={styles.modalButtonCancel}>
              <Text style={{color: '#EEEEEE', fontSize: 20,}}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonSubmit}>
              <Text style={{color: '#EEEEEE', fontSize: 20,}}>更新</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  modalWrapper: {
    height: '90%',
    padding: 3,
    backgroundColor: '#333333',
    borderRadius: 15
  },
  modalParkingTime: {
    flex: 1,
  },
  modalParkingTimeText: {
    textAlign: 'center',
    color: '#EEEEEE',
    fontSize: 30
  },
  modalParkingTabWrapper: {
    flex: 0.5,
    flexDirection: 'row-reverse',
  },
  modalParkingTabs: {
    backgroundColor: "#EEEEEE",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalButtonsWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalButtonCancel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#97999d",
    borderRadius: 5,
    overflow: 'hidden',
    padding: 1,
    margin: 5,
  },
  modalButtonSubmit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00a7f3",
    borderRadius: 5,
    overflow: 'hidden',
    padding: 1,
    margin: 5,
  }
  
});
