import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Map2nd(props) {

    return(
        <View style={styles.parkingMap}>
        <View style={styles.mapRow}>
        {/* 1行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.mapText}>出口</Text>
        </View>
        <View style={styles.mapRow}>
        {/* 2行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>04</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>05</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>33</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 5行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 6行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 7行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 8行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
        </View>
        <View style={styles.mapRow}>
          {/* 11行目 */}
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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
          <Text style={(props.selected === '06') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={styles.spaceHidden}></Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
          <Text style={(props.selected === '01') ? styles.spaceSelected : styles.space}>01</Text>
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