import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Map3rd(props) {

  const onPressSpace = number => {
    if(props.modal) {
      props.setSelectingSpace(number);
    }
  }

  return(
    <View style={styles.parkingMap}>
      <View style={styles.mapRow}>
        {/* 1行目 */}
        <Text onPress={() => {onPressSpace('29')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '29') || (props.selectingSpace === '29')) ? styles.spaceSelected : styles.space}>29</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 2行目 */}
        <Text onPress={() => {onPressSpace('28')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '28') || (props.selectingSpace === '28')) ? styles.spaceSelected : styles.space}>28</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 3行目 */}
        <Text onPress={() => {onPressSpace('27')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '27') || (props.selectingSpace === '27')) ? styles.spaceSelected : styles.space}>27</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('16')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '16') || (props.selectingSpace === '16')) ? styles.spaceSelected : styles.space}>16</Text>
        <Text onPress={() => {onPressSpace('14')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '14') || (props.selectingSpace === '14')) ? styles.spaceSelected : styles.space}>14</Text>
        <Text onPress={() => {onPressSpace('08')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '08') || (props.selectingSpace === '08')) ? styles.spaceSelected : styles.space}>08</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 4行目 */}
        <Text onPress={() => {onPressSpace('26')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '26') || (props.selectingSpace === '26')) ? styles.spaceSelected : styles.space}>26</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('15')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '15') || (props.selectingSpace === '15')) ? styles.spaceSelected : styles.space}>15</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('07')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '07') || (props.selectingSpace === '07')) ? styles.spaceSelected : styles.space}>07</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 5行目 */}
        <Text onPress={() => {onPressSpace('25')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '25') || (props.selectingSpace === '25')) ? styles.spaceSelected : styles.space}>25</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('13')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '13') || (props.selectingSpace === '13')) ? styles.spaceSelected : styles.space}>13</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('06')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '06') || (props.selectingSpace === '06')) ? styles.spaceSelected : styles.space}>06</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('00')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '00') || (props.selectingSpace === '00')) ? styles.spaceSelected : styles.space}>00</Text>
      </View>
      <View style={styles.mapRow}>
        {/* 6行目 */}
        <Text onPress={() => {onPressSpace('24')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '24') || (props.selectingSpace === '24')) ? styles.spaceSelected : styles.space}>24</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('12')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '12') || (props.selectingSpace === '12')) ? styles.spaceSelected : styles.space}>12</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('05')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '05') || (props.selectingSpace === '05')) ? styles.spaceSelected : styles.space}>05</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('00')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '00') || (props.selectingSpace === '00')) ? styles.spaceSelected : styles.space}>00</Text>
      </View>
      <View style={styles.mapRow}>
        {/* 7行目 */}
        <Text onPress={() => {onPressSpace('23')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '23') || (props.selectingSpace === '23')) ? styles.spaceSelected : styles.space}>23</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('11')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '11') || (props.selectingSpace === '11')) ? styles.spaceSelected : styles.space}>11</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('04')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '04') || (props.selectingSpace === '04')) ? styles.spaceSelected : styles.space}>04</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 8行目 */}
        <Text onPress={() => {onPressSpace('22')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '22') || (props.selectingSpace === '22')) ? styles.spaceSelected : styles.space}>22</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('10')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '10') || (props.selectingSpace === '10')) ? styles.spaceSelected : styles.space}>10</Text>
        <Text onPress={() => {onPressSpace('09')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '09') || (props.selectingSpace === '09')) ? styles.spaceSelected : styles.space}>09</Text>
        <Text onPress={() => {onPressSpace('03')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '03') || (props.selectingSpace === '03')) ? styles.spaceSelected : styles.space}>03</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 9行目 */}
        <Text onPress={() => {onPressSpace('21')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '21') || (props.selectingSpace === '21')) ? styles.spaceSelected : styles.space}>21</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 10行目 */}
        <Text onPress={() => {onPressSpace('20')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '20') || (props.selectingSpace === '20')) ? styles.spaceSelected : styles.space}>20</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 11行目 */}
        <Text onPress={() => {onPressSpace('19')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '19') || (props.selectingSpace === '19')) ? styles.spaceSelected : styles.space}>19</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text onPress={() => {onPressSpace('02')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '02') || (props.selectingSpace === '02')) ? styles.spaceSelected : styles.space}>02</Text>
        <Text onPress={() => {onPressSpace('01')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '01') || (props.selectingSpace === '01')) ? styles.spaceSelected : styles.space}>01</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 12行目 */}
        <Text onPress={() => {onPressSpace('18')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '18') || (props.selectingSpace === '18')) ? styles.spaceSelected : styles.space}>18</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
      <View style={styles.mapRow}>
        {/* 13行目 */}
        <Text onPress={() => {onPressSpace('17')}} style={((props.parkingFloor === '3') && (props.parkingSpace === '17') || (props.selectingSpace === '17')) ? styles.spaceSelected : styles.space}>17</Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
        <Text style={styles.spaceHidden}></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parkingMap: {
      flex: 5,
      padding: 5,
      backgroundColor: '#444444'
    },
    mapRow: {
      flex: 1,
      flexDirection: 'row',
    },
    space: {
      flex: 1,
      backgroundColor: "#EEEEEE",
      borderRadius: 5,
      overflow: 'hidden',
      padding: 10,
      margin: 1,
      textAlign: 'center'
    },
    spaceSelected: {
      flex: 1,
      backgroundColor: "#2cc46c",
      color: '#EEEEEE',
      borderRadius: 5,
      overflow: 'hidden',
      padding: 10,
      margin: 1,
      textAlign: 'center'
    },
    spaceHidden: {
      flex: 1,
      padding: 10,
      margin: 1,
      borderRadius: 20,
      borderWidth: 1,
      opacity: 0
    },
    mapText: {
      padding: 10, 
      color: '#EEEEEE',
    }
})