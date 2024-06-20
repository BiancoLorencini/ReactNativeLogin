import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const Button = ({title}: any) => {
  return (
    <LinearGradient
        colors={['#b226dd', '#9e0ee9', '#6b11c9']}
        style={styles.button}
        >
            <TouchableOpacity  style={styles.subButton} >
              <Text style={styles.linkButton}>{title}</Text>
            </TouchableOpacity>
    </LinearGradient>
  )
}

export default Button


export const styles = StyleSheet.create({
  button: {
    width: '40%',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
    borderRadius: 5,
  },
  subButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkButton: {
    color: 'white',
  },
});