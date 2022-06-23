import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import database from '@react-native-firebase/database';

let itemsRef = database().ref('items/');

export default function List({navigation}) {
  const [itemsArray, setItemsArray] = React.useState({});
  React.useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      setItemsArray(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {itemsArray && Object.keys(itemsArray).length > 0 && (
        <ItemComponent items={itemsArray} 
         navigation={navigation}/>
      )}
       {itemsArray === null && (
        <Text style={styles.textStyle}>No Contacts Saved</Text>
       )}
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  textStyle:{
    fontSize:24,fontWeight:'bold',textAlign:'center',padding:10
  }
});