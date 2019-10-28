import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/TopStyles'

function Top(){

const [switchMode, setSwitch] = useState(false);
const [bg, setBg] = useState({
  backgroundColor:"white",
});

var txt = null;

if(switchMode === false){
  txt = (
    <Text>Day Mode</Text>
  )
    bg = styles.white
}
if(switchMode === true){
  txt = (
    <Text style={{color:"white"}}>Night Mode</Text>
  )
    bg = styles.black
}

  return(
    <View style={bg}>
      <Switch
      onValueChange = {(value)=>setSwitch(value)}
      value = {switchMode}
      />
      <Text>{txt}</Text>
    </View>
  )
}

export default Top;
