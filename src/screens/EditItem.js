import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';
import { useEffect } from 'react/cjs/react.production.min';
export default function EditItem({navigation,route}) {
  const [name, onChangeText] = React.useState(route.params.editData);
  const handleSubmit = () => {
    // editItem(name);
    Alert.alert('Not Implemented yet');
  };
  const onChangeMethod=(text)=>{
    onChangeText(text)
  }
  return (
   
    <View style={styles.main}>
      <Text style={styles.title}>Edit Item</Text>
      <TextInput
        style={styles.itemInput}
        value={name}
        onChangeText={text => onChangeMethod(text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
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