import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';

const API_KEY = "821f07c1a9e2948b18b4269a36323df1"
export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    const { data } = await axios.get(url)
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find your position", "Allow me to see where you are:(")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      this.state.isLoading ? <Loading /> : (
        <View style={styles.container}>
          <Text>WTF</Text>
          <StatusBar style="auto" />
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
