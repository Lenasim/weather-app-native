import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: ['#2c3e50', '#3498db'],
  Drizzle: ['#9796f0', '#fbc7d4'],
  Rain: ['#DAE2F8', '#D6A4A4'],
  Snow: ['#eaafc8', '#654ea3'],
  Mist: ['#FC5C7D', '#6A82FB'],
  Dust: ['#CCCCB2', '#757519'],
  Haze: ['#E8CBC0', '#636FA4'],
  Tornado: ['#cc5333', '#23074d'],
  Clear: ['#40E0D0', '#2F80ED'],
  Clouds: ['#C9FFBF', '#FFAFBD']
}

export default function Weather(props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[props.condition] || ['#457fca', '#5691c8']}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Image
          style={styles.icon}
          source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }}
        />
        <Text style={styles.temp}> {props.temp}° </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.condition}> {props.condition} today ! </Text>
      </View>
    </LinearGradient>
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
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 32,
    color: 'white'
  },
  condition: {
    color: 'white',
    fontSize: 25,
  }
});
