import React from 'react';
import {View, Text, StyleSheet,Button,ScrollView} from 'react-native';
import database from '@react-native-firebase/database';

export default function ItemComponent({items,navigation}) {
    console.log("items1",items);
 const deleteItem=(key)=>{
    console.log("items",key);
     console.log("hey");
 database().ref('items/'+key).remove()
 }

 const editItem=(item)=>{
   navigation.navigate("Edit",{editData:item})
 }
  return (
    <ScrollView>
      <Text style={[styles.itemtext,{marginTop:10,marginBottom:10}]}>Contacts List</Text>
      {Object.keys(items).sort((a,b)=> a.items-b.items).map((key) => {
        return (
          <View style={styles.itemsList} key={key}>
    
            <View style={{flex:0.6,marginLeft:10}}>
            {/* <Text style={styles.itemtext}>{k}</Text> */}
            <View style={{flexDirection:'row'}}>
            <Text style={styles.itemsListText}>Name:</Text>
            <Text style={[styles.itemsListText,{color:'orange'}]}>{items[key].name}</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={styles.itemsListText}>PhoneNo:</Text>
            <Text style={[styles.itemsListText,{color:'orange'}]}>{items[key].phone}</Text>
            </View>
            </View>
            <View style={{flex:0.4,flexDirection:'row',marginTop:10}}>
            <Button title='Remove'style ={styles.itemsListText}onPress={()=>deleteItem(key.toString())}/>
            <Button title='Edit' style={styles.itemsListText} onPress={()=>editItem(items[key].name)}/>
            </View>
          </View> 
        );
        
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:0.5,
    flexDirection:'row',
    borderRadius:15,
    margin:10
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemsListText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10
  },
});