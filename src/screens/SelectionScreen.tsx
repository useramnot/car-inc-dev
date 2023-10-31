import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
// export const [selected, setSelected] = useState()
// import CarsData from './' @TODO


export default function HomeScreen() {  
  const [searchText, setSearchText] = useState()
  const navigation = useNavigation<any>()
  const [selected, setSelected] = useState()
  const [disableSearch] = useState(false)

  //const CarData = require('./../data/db')

  // Test
  const data = [
    {key:'1', value:'Aalborg'},
    {key:'2', value:'Aarhus'},
    {key:'3', value:'Copenhagen'},
    {key:'4', value:'Odense'}
  ]

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <SelectList
          setSelected={setSelected} // @TODO
          data={data}
          boxStyles={styles.boxStyles}
          dropdownStyles={styles.dropdownStyles}
          searchPlaceholder='Pick a city'
        />
        <TouchableHighlight
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
          activeOpacity={0.7}
          underlayColor='#bbb'
          delayPressOut={400}
          disabled={disableSearch}
        >
          <Text style={styles.buttontext}>Search</Text>
        </TouchableHighlight>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },

  image:{
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '50%'
  },

  boxStyles: {
    borderColor: '#000',
    borderRadius: 100,
    borderWidth: 2,
    width: '52.5%'
  },

  dropdownStyles: {
    // @TODO something
  },
  
  button:{
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 100,
    justifyContent: 'center',
    margin: 10,
    width: '75%',
    height: 48
  },
  
  buttontext:{
    color: '#fff',
    fontSize: 15,
    margin: 10
  },
})