import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";

const Input = ({title, type}: any) => {
  return (
    <>
      <Text style={styles.labelForm}>{title}</Text>
          <TextInput
          style={styles.input}
          keyboardType={type}
      />
    </>
  )
}

export default Input


export const styles = StyleSheet.create({
  labelForm: {
    color: 'white',
    fontSize: 15,
    marginLeft: '5%',
    marginBottom: '1%',
    marginTop: '5%'
  },
  input:{
    width: '90%',
    height: '6%',
    alignSelf: 'center',
    backgroundColor: '#1c1d21',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  
});