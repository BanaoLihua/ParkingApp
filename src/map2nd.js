import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Map2nd(props) {

    const onPressSpace = number => {
      if(props.modal) {
        props.setSelectingSpace(number);
      }
    }

    return(
        <View style={styles.parkingMap}>
        <View style={styles.mapRow}>
        {/* 1行目 */}
          <Text onPress={() => {onPressSpace('42')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '42') || (props.selectingSpace === '42')) ? styles.spaceSelected : styles.space}>42</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('29')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '29') || (props.selectingSpace === '29')) ? styles.spaceSelected : styles.space}>29</Text>
          <Text onPress={() => {onPressSpace('28')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '28') || (props.selectingSpace === '28')) ? styles.spaceSelected : styles.space}>28</Text>
          <Text onPress={() => {onPressSpace('27')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '27') || (props.selectingSpace === '27')) ? styles.spaceSelected : styles.space}>27</Text>
          <Text onPress={() => {onPressSpace('26')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '26') || (props.selectingSpace === '26')) ? styles.spaceSelected : styles.space}>26</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.mapText}>出口</Text>
        </View>
        <View style={styles.mapRow}>
        {/* 2行目 */}
          <Text onPress={() => {onPressSpace('41')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '41') || (props.selectingSpace === '41')) ? styles.spaceSelected : styles.space}>41</Text>
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
          <Text onPress={() => {onPressSpace('40')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '40') || (props.selectingSpace === '40')) ? styles.spaceSelected : styles.space}>40</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 4行目 */}
          <Text onPress={() => {onPressSpace('39')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '39') || (props.selectingSpace === '39')) ? styles.spaceSelected : styles.space}>39</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('25')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '25') || (props.selectingSpace === '25')) ? styles.spaceSelected : styles.space}>25</Text>
          <Text onPress={() => {onPressSpace('21')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '21') || (props.selectingSpace === '21')) ? styles.spaceSelected : styles.space}>21</Text>
          <Text onPress={() => {onPressSpace('19')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '19') || (props.selectingSpace === '19')) ? styles.spaceSelected : styles.space}>19</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('13')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '13') || (props.selectingSpace === '13')) ? styles.spaceSelected : styles.space}>13</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 5行目 */}
          <Text onPress={() => {onPressSpace('38')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '38') || (props.selectingSpace === '38')) ? styles.spaceSelected : styles.space}>38</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('24')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '24') || (props.selectingSpace === '24')) ? styles.spaceSelected : styles.space}>24</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('18')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '18') || (props.selectingSpace === '18')) ? styles.spaceSelected : styles.space}>18</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('12')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '12') || (props.selectingSpace === '12')) ? styles.spaceSelected : styles.space}>12</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 6行目 */}
          <Text onPress={() => {onPressSpace('37')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '37') || (props.selectingSpace === '37')) ? styles.spaceSelected : styles.space}>37</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('23')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '23') || (props.selectingSpace === '23')) ? styles.spaceSelected : styles.space}>23</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('17')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '17') || (props.selectingSpace === '17')) ? styles.spaceSelected : styles.space}>17</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('11')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '11') || (props.selectingSpace === '11')) ? styles.spaceSelected : styles.space}>11</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 7行目 */}
          <Text onPress={() => {onPressSpace('36')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '36') || (props.selectingSpace === '36')) ? styles.spaceSelected : styles.space}>36</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('22')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '22') || (props.selectingSpace === '22')) ? styles.spaceSelected : styles.space}>22</Text>
          <Text onPress={() => {onPressSpace('20')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '20') || (props.selectingSpace === '20')) ? styles.spaceSelected : styles.space}>20</Text>
          <Text onPress={() => {onPressSpace('16')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '16') || (props.selectingSpace === '16')) ? styles.spaceSelected : styles.space}>16</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('10')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '10') || (props.selectingSpace === '10')) ? styles.spaceSelected : styles.space}>10</Text>
          <Text onPress={() => {onPressSpace('09')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '09') || (props.selectingSpace === '09')) ? styles.spaceSelected : styles.space}>09</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 8行目 */}
          <Text onPress={() => {onPressSpace('35')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '35') || (props.selectingSpace === '35')) ? styles.spaceSelected : styles.space}>35</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 9行目 */}
          <Text onPress={() => {onPressSpace('34')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '34') || (props.selectingSpace === '34')) ? styles.spaceSelected : styles.space}>34</Text>
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
          <Text onPress={() => {onPressSpace('33')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '33') || (props.selectingSpace === '33')) ? styles.spaceSelected : styles.space}>33</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('15')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '15') || (props.selectingSpace === '15')) ? styles.spaceSelected : styles.space}>15</Text>
          <Text onPress={() => {onPressSpace('14')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '14') || (props.selectingSpace === '14')) ? styles.spaceSelected : styles.space}>14</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 11行目 */}
          <Text onPress={() => {onPressSpace('32')}} style={((props.parkingFloor === '32') && (props.parkingSpace === '32') || (props.selectingSpace === '32')) ? styles.spaceSelected : styles.space}>32</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 12行目 */}
          <Text onPress={() => {onPressSpace('31')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '31') || (props.selectingSpace === '31')) ? styles.spaceSelected : styles.space}>31</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.mapText}>外部</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 13行目 */}
          <Text onPress={() => {onPressSpace('30')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '30') || (props.selectingSpace === '30')) ? styles.spaceSelected : styles.space}>30</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text onPress={() => {onPressSpace('03')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '03') || (props.selectingSpace === '03')) ? styles.spaceSelected : styles.space}>03</Text>
          <Text onPress={() => {onPressSpace('02')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '02') || (props.selectingSpace === '02')) ? styles.spaceSelected : styles.space}>02</Text>
          <Text onPress={() => {onPressSpace('01')}} style={((props.parkingFloor === '2') && (props.parkingSpace === '01') || (props.selectingSpace === '01')) ? styles.spaceSelected : styles.space}>01</Text>
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