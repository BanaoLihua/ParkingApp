import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Map2nd(props) {

    return(
        <View style={styles.parkingMap}>
        <View style={styles.mapRow}>
        {/* 1行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '42')) ? styles.spaceSelected : styles.space}>42</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '29')) ? styles.spaceSelected : styles.space}>29</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '28')) ? styles.spaceSelected : styles.space}>28</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '27')) ? styles.spaceSelected : styles.space}>27</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '26')) ? styles.spaceSelected : styles.space}>26</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.mapText}>出口</Text>
        </View>
        <View style={styles.mapRow}>
        {/* 2行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '41')) ? styles.spaceSelected : styles.space}>41</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '40')) ? styles.spaceSelected : styles.space}>40</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '39')) ? styles.spaceSelected : styles.space}>39</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '25')) ? styles.spaceSelected : styles.space}>25</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '21')) ? styles.spaceSelected : styles.space}>21</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '19')) ? styles.spaceSelected : styles.space}>19</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '13')) ? styles.spaceSelected : styles.space}>13</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 5行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '38')) ? styles.spaceSelected : styles.space}>38</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '24')) ? styles.spaceSelected : styles.space}>24</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '18')) ? styles.spaceSelected : styles.space}>18</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '12')) ? styles.spaceSelected : styles.space}>12</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 6行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '37')) ? styles.spaceSelected : styles.space}>37</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '23')) ? styles.spaceSelected : styles.space}>23</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '17')) ? styles.spaceSelected : styles.space}>17</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '11')) ? styles.spaceSelected : styles.space}>11</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 7行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '36')) ? styles.spaceSelected : styles.space}>36</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '22')) ? styles.spaceSelected : styles.space}>22</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '20')) ? styles.spaceSelected : styles.space}>20</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '16')) ? styles.spaceSelected : styles.space}>16</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '10')) ? styles.spaceSelected : styles.space}>10</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '09')) ? styles.spaceSelected : styles.space}>09</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 8行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '35')) ? styles.spaceSelected : styles.space}>35</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '34')) ? styles.spaceSelected : styles.space}>34</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '33')) ? styles.spaceSelected : styles.space}>33</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '15')) ? styles.spaceSelected : styles.space}>15</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '14')) ? styles.spaceSelected : styles.space}>14</Text>
          <Text style={styles.spaceHidden}></Text>
        </View>
        <View style={styles.mapRow}>
          {/* 11行目 */}
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '32')) ? styles.spaceSelected : styles.space}>32</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '31')) ? styles.spaceSelected : styles.space}>31</Text>
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
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '30')) ? styles.spaceSelected : styles.space}>30</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '03')) ? styles.spaceSelected : styles.space}>03</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '02')) ? styles.spaceSelected : styles.space}>02</Text>
          <Text style={((props.parkingFloor === '2') && (props.parkingSpace === '01')) ? styles.spaceSelected : styles.space}>01</Text>
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