import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Weather(props) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Image
          style={styles.icon}
          source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }}
        />
        <Text> {props.temp} </Text>
      </View>
      <View style={styles.halfContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 80,
    height: 80,
  }
});
