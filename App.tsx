import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, Switch, KeyboardAvoidingView} from "react-native";
import Checkbox from 'expo-checkbox';
import { styles } from './Global.ts';
import { LinearGradient } from 'expo-linear-gradient';
import Botão from './src/components/Button.tsx'
import Input from './src/components/Input.tsx'


export default function App() {
  
  const [isChecked, setChecked] = useState(false);
  
  return (
    <>
      <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
        <Image
          source={require('./assets/origamidLogo.png')}
          style={styles.imgLogo}/>
          
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.textoLogin}>Login / Registro</Text>
            <View style={styles.detalhe01}></View>
          <View style={styles.containerForm}>
            <LinearGradient
            colors={['#b226dd', '#9e0ee9', '#6b11c9']}
            style={styles.detalhe}
            >
            <View style={styles.detalhe}></View>
            </LinearGradient>
            <Text style={styles.textoLoginForm}> Entrar </Text>
            
            <Input title='Email' type='email-adress'/>

            <Input title='Senha'
            />
            
            <View style={styles.section}>
              <View style={styles.sectionA}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                <Text style={styles.paragraph}>Lembre-me</Text>
              </View>
              <View>
              <TouchableOpacity>
                <Text style={styles.link}>Perdeu a senha?</Text>
              </TouchableOpacity>
              </View>
            </View>

            <Botão title="Acessar Conta" />

            <LinearGradient
            colors={['#b226dd', '#9e0ee9', '#6b11c9']}
            style={styles.detalhe2}
            >
            <View style={styles.detalhe2}></View>
            </LinearGradient>
            <Text style={styles.textoLoginForm2}> Registre-se </Text>

            <View style={styles.containerTextoCadastro}>
              <Text style={styles.textoCadastro}>Se você ainda não possui uma conta, escolha um plano da Origamid e preencha o cadastro.</Text>
            </View>

            <Botão title="Escolher Plano" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};