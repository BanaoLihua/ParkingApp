import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Map2nd from './src/map2nd';
import Map3rd from './src/map3rd';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {

  useEffect(() => {
    receiveData();
  },[]);

  const [selectedMap, setSelectedMap] = useState(2);

  const [parkingSpace, setParkingSpace] = useState();

  const [parkingFloor, setParkingFloor] = useState('2');

  const [datetime, setDatetime] = useState(new Date());

  const [newDatetime, setNewDateTime] = useState(new Date());

  const [modalDatetime, setModalDatetime] = useState(fromDateToString(new Date()));

  const [selectedModalMap, setSelectedModalMap] = useState(2);

  function fromDateToString(datetime) {
    const month = 1 + datetime.getMonth();
    const day = datetime.getDate();
    const hour = datetime.getHours();
    const minute = datetime.getMinutes();
    const strMDHM = `${month}月${day}日${hour}時${minute}分`;
    return strMDHM;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  }

  const closeDatePicker = () => {
    setIsDatePickerVisible(false);
  }

  const handleConfirm = datetime => {
    setModalDatetime(fromDateToString(datetime));
    setNewDateTime(datetime);
    closeDatePicker();
  }

  const getElapsedTime = () => {
    const now = new Date();
    const diff = now - datetime;
    const diffMinutes = Math.floor(diff / (60 * 1000));
    const hour = Math.floor(diffMinutes / 60);
    const min = diffMinutes % 60;
    const diffHourMinutes = `${hour}時間${min}分`
    return diffHourMinutes;
  }

  const [modalSelectingSpace, setModalSelectingSpace] = useState();

  const sendURL = 'https://script.google.com/macros/s/AKfycbw-ttFcVp54-mFnNggAtu_OSlpg22ph7VcaAQrMql9yqTlNtxgYnIUE8o7JBhOQG8AV/exec';

  const receiveURL = 'https://script.google.com/macros/s/AKfycbxX2G2tlfODeg1jewuacUEUqPjM_mqjU_a3YufTJCAZW1AskYCYr2X7ftA_NiSu1KhjSg/exec';

  const sendData = () => {
    const url = sendURL + `?space=${modalSelectingSpace}&floor=${selectedModalMap}&time=${newDatetime}`;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
  }

  const receiveData = async () => {
    const url = receiveURL;
    const receivedData = fetch(url).then(res => res.json());
    const json = await receivedData;
    setParkingSpace(spaceConverter(json[0].space));
    setParkingFloor(floorConverter(json[0].floor));
    setDatetime(timeConverter(json[0].time));
  }

  const spaceConverter = space => {
    return (space <= 9) ? ('0' + space.toString()) : space.toString();
  }

  const floorConverter = floor => {
    return floor.toString();
  }

  const timeConverter = time => {
    return new Date(time.substr(4, 20));
  }

  const onPressReset = () => {
    sendData();
    window.setTimeout(receiveData, 1000)
    closeModal();
  }

  return (
    <View style={styles.container}>
      <View style={styles.countHour}>
        <View style={styles.countHourTitle}>
          <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車時間</Text>
        </View>
        <View style={styles.countHourMinutes}>
          <Text style={{fontSize: 40, color: '#EEEEEE'}}>
            {getElapsedTime()} <Icon name="repeat" size={40} onPress={openModal} />
          </Text>
        </View>
      </View>

      {(selectedMap === 2) && <Map2nd parkingFloor={parkingFloor} parkingSpace={parkingSpace} />}
      {(selectedMap === 3) && <Map3rd parkingFloor={parkingFloor} parkingSpace={parkingSpace} />}
      
      <View style={styles.floorLevelTabWrapper}>
        <TouchableOpacity style={(selectedMap === 3) ? styles.levelTabSelected : styles.levelTab} onPress={() => {setSelectedMap(3)}}>
          <Text style={(selectedMap === 3) ? styles.levelTabTextSelected : styles.levelTabText}>3F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={(selectedMap === 2) ? styles.levelTabSelected : styles.levelTab} onPress={() => {setSelectedMap(2)}}>
          <Text style={(selectedMap === 2) ? styles.levelTabTextSelected : styles.levelTabText}>2F</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parkingInformation}>
        <Text style={{fontSize: 20, color: '#EEEEEE'}}>駐車場所：{parkingFloor}F {parkingSpace}</Text>
      </View>

      <Modal isVisible={isModalVisible} hasBackdrop={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalParkingTime}>
            <Text style={styles.modalParkingTimeText}>{modalDatetime} <Icon name="edit" size={30} onPress={showDatePicker} /></Text>
          </View>

          <View style={styles.modalLevelTabWrapper}>
              <TouchableOpacity style={(selectedModalMap === 3) ? styles.modalLevelTabSelected : styles.modalLevelTab} onPress={() => {setSelectedModalMap(3); setModalSelectingSpace()}}>
                <Text style={(selectedModalMap === 3) ? styles.modalLevelTabTextSelected : styles.modalLevelTabText}>3F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={(selectedModalMap === 2) ? styles.modalLevelTabSelected : styles.modalLevelTab} onPress={() => {setSelectedModalMap(2); setModalSelectingSpace()}}>
                <Text style={(selectedModalMap === 2) ? styles.modalLevelTabTextSelected : styles.modalLevelTabText}>2F</Text>
              </TouchableOpacity>
          </View>
          
          {(selectedModalMap === 2) && <Map2nd modal={true} setSelectingSpace={setModalSelectingSpace} selectingSpace={modalSelectingSpace} />}
          {(selectedModalMap === 3) && <Map3rd modal={true} setSelectingSpace={setModalSelectingSpace} selectingSpace={modalSelectingSpace} />}

          <View style={styles.modalButtonsWrapper}>
            <TouchableOpacity onPress={closeModal} style={styles.modalButtonCancel}>
              <Text style={{color: '#EEEEEE', fontSize: 20,}}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressReset} style={styles.modalButtonSubmit}>
              <Text style={{color: '#EEEEEE', fontSize: 20,}}>更新</Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={closeDatePicker}
              isDarkModeEnabled={true}
              cancelTextIOS={'取消'}
              confirmTextIOS={'確定'}
            />

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
  levelTabSelected: {
    backgroundColor: "#00a7f3",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  levelTabText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#222222'
  },
  levelTabTextSelected: {
    textAlign: 'center',
    fontSize: 20,
    color: '#EEEEEE'
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
  modalLevelTabWrapper: {
    flex: 0.3,
    flexDirection: 'row-reverse',
  },
  modalLevelTab: {
    backgroundColor: "#EEEEEE",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalLevelTabSelected: {
    backgroundColor: "#00a7f3",
    width: 80,
    marginRight: 5,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalLevelTabText: {
    textAlign: 'center',
    fontSize: 20,
    color: "#222222"
  },
  modalLevelTabTextSelected: {
    textAlign: 'center',
    fontSize: 20,
    color: "#EEEEEE",
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
