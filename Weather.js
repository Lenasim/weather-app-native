import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: ['#2c3e50', '#3498db'],
  Drizzle: ['#9796f0', '#fbc7d4'],
  Rain: ['#83a4d4', '#b6fbff'],
  Snow: ['#77A1D3', '#79CBCA', '#E684AE'],
  Mist: ['#B993D6', '#8CA6DB'],
  Haze: ['#4568DC', '#B06AB3'],
  Dust: ['#F3904F', '#3B4371'],
  Tornado: ['#283c86', '#45a247'],
  Clear: ['#00c3ff', '#ffff1c'],
  Clouds: ['#ACB6E5', '#4ca2cd']
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
