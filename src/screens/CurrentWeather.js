import React from 'react';
import  { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  
  const { 
    wrapper, 
    container, 
    temp, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message } = styles;

  return (
    <SafeAreaView style={wrapper}>
      
      <View style= {container}>
        <Feather name='sun' size={100} color="black"/>
        <Text style= {temp}>6</Text>
        <Text style = {feels}>Feels like 5</Text>
        <RowText 
        messageOne={'High: 8'} 
        messageTwo={'Low: 6'} 
        containerStyles={highLowWrapper} 
        messageOneStyles={highLow} 
        messageTwoStyles={highLow} 
        />
      </View>

      <RowText messageOne={'Its Sunny'} 
      messageTwo={'Its Perfect T-shirt Weather'} 
      containerStyles={bodyWrapper} 
      messageOneStyle={description} 
      messageTwoStyles={message} />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
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
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather;