import React from 'react';
import  { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      
      <View style= {styles.container}>
        <Text>Current Weather</Text>
        <Text style= {styles.temp}>6</Text>
        <Text style = {styles.feels}>Feels like 5</Text>
        <View style = {styles.highLowWrapper}>
          <Text style = {styles.highLow}>High: 8</Text>
          <Text style = {styles.highLow}>Low: 6</Text>
        </View>
      </View>
      
      <View style= {styles.bodyWrapper}>
        <Text>It's Sunny</Text>
        <Text>It's perfect T-shirt weather</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  wrapper: {
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
})
export default App;