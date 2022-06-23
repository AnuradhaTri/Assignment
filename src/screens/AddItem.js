import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator
} from 'react-native';

import database from '@react-native-firebase/database';
export default function AddItem() {
  const [name, onChangeText] = React.useState('');
  const [phone,setPhoneNumber]= React.useState('');
  const [isloading,setIsloading]=React.useState(false);
  const addItem = (name,phone) => {
   database().ref('items/')
   .push({
     name: name,
     phone:phone
 
   }).then((data)=>{
     //success callback
     setIsloading(false)
 }).catch((error)=>{
     //error callback
     console.log('error ' , error)
 })
 };
  const handleSubmit = () => {
    setIsloading(true)
    addItem(name,phone);
    Alert.alert('Item saved successfully');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.itemInput}
        placeholder='Name'
        onChangeText={text => onChangeText(text)}
      />
      <TextInput
        style={[styles.itemInput,{marginTop:5}]}
        placeholder='Mobile'
        keyboardType='number-pad'
        maxLength={10}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
      {isloading && (
        <ActivityIndicator size="small" color="#0000ff" />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    // flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 40,
    padding: 5,
    marginRight: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});