import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Loading
        </Text>
      <Text style={styles.text2}>
        Getting the weather
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa"
  },
  text1: {
    color: "#2c2c2c",
    fontSize: 35
  },
  text1: {
    color: "#2c2c2c",
    fontSize: 25
  }
})

export default Loading