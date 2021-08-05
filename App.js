import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Map2nd from './src/map2nd';
import Map3rd from './src/map3rd';

export default function App() {

  const [selectedMap, setSelectedMap] = useState(2);

  const [selectedSpace, setSelectedSpace] = useState('06')

  const [selectedModalMap, setSelectedModalMap] = useState(2);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  // Tab (冗長なので後で修正)

  const tabBackgroundColor2 = () => {
    switch(selectedMap) {
      case 2:
        return '#00a7f3';
      case 3:
        return '#EEEEEE';
    }
  }
  const tabBackgroundColor3 = () => {
    switch(selectedMap) {
      case 2:
        return '#EEEEEE';
      case 3:
        return '#00a7f3';
    }
  }

  const tabStyle2 = () => {
    return{
      backgroundColor: tabBackgroundColor2(),
      width: 80,
      marginRight: 5,
      overflow: 'hidden',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    }
  }

  const tabStyle3 = () => {
    return{
      backgroundColor: tabBackgroundColor3(),
      width: 80,
      marginRight: 5,
      overflow: 'hidden',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    }
  }

  const tabTextColor2 = () => {
    switch(selectedMap) {
      case 2:
        return '#EEEEEE';
      case 3:
        return '#222222';
    }
  }

  const tabTextColor3 = () => {
    switch(selectedMap) {
      case 2:
        return '#222222';
      case 3:
        return '#EEEEEE';
    }
  }

  const tabTextStyle2 = () => {
    return {
      textAlign: 'center',
      fontSize: 20,
      color: tabTextColor2(),
    }
  }

  const tabTextStyle3 = () => {
    return {
      textAlign: 'center',
      fontSize: 20,
      color: tabTextColor3(),
    }
  }

  // Tab (end)

  // Modal tab

  const modalTabBackgroundColor2 = () => {
    switch(selectedModalMap) {
      case 2:
        return '#00a7f3';
      case 3:
        return '#EEEEEE';
    }
  }
  const modalTabBackgroundColor3 = () => {
    switch(selectedModalMap) {
      case 2:
        return '#EEEEEE';
      case 3:
        return '#00a7f3';
    }
  }

  const modalTabTextColor2 = () => {
    switch(selectedModalMap) {
      case 2:
        return '#EEEEEE';
      case 3:
        return '#222222';
    }
  }

  const modalTabTextColor3 = () => {
    switch(selectedModalMap) {
      case 2:
        return '#222222';
      case 3:
        return '#EEEEEE';
    }
  }

  const modalTabStyle2 = () => {
    return{
      backgroundColor: modalTabBackgroundColor2(),
      width: 80,
      marginRight: 5,
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }
  }

  const modalTabStyle3 = () => {
    return{
      backgroundColor: modalTabBackgroundColor3(),
      width: 80,
      marginRight: 5,
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }
  }

  const modalTabTextStyle2 = () => {
    return {
      textAlign: 'center',
      fontSize: 20,
      color: modalTabTextColor2(),
    }
  }

  const modalTabTextStyle3 = () => {
    return {
      textAlign: 'center',
      fontSize: 20,
      color: modalTabTextColor3(),
    }
  }

  // modal tab (end)

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

      {(selectedMap === 2) && <Map2nd selected={selectedSpace} />}
      {(selectedMap === 3) && <Map3rd selected={selectedSpace} />}
      
      <View style={styles.floorLevelTabWrapper}>
        <TouchableOpacity style={tabStyle3()} onPress={() => {setSelectedMap(3)}}>
          <Text style={tabTextStyle3()}>3F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tabStyle2()} onPress={() => {setSelectedMap(2)}}>
          <Text style={tabTextStyle2()}>2F</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parkingInformation}>
        <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車場所：2F 35</Text>
      </View>

      <Modal isVisible={isModalVisible} hasBackdrop={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalParkingTime}>
            <Text style={styles.modalParkingTimeText}>08/03 20:38</Text>
          </View>

          <View style={styles.modalParkingTabWrapper}>
              <TouchableOpacity style={modalTabStyle3()} onPress={() => {setSelectedModalMap(3)}}>
                <Text style={modalTabTextStyle3()}>3F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalTabStyle2()} onPress={() => {setSelectedModalMap(2)}}>
                <Text style={modalTabTextStyle2()}>2F</Text>
              </TouchableOpacity>
          </View>
          
          {(selectedModalMap === 2) && <Map2nd />}
          {(selectedModalMap === 3) && <Map3rd />}

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
    flex: 0.5,
  },
  modalParkingTimeText: {
    textAlign: 'center',
    color: '#EEEEEE',
    fontSize: 30
  },
  modalParkingTabWrapper: {
    flex: 0.3,
    flexDirection: 'row-reverse',
  },
  modalParkingTabs: {
    backgroundColor: "#EEEEEE",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalButtonsWrapper: {
    flexDirection: 'row',
    flex: 0.8,
    marginTop: 10,
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
