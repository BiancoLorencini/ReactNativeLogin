import { Button } from "@rneui/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop: '6%',
  },
  imgLogo:{
    alignSelf: 'center'
  },
  scrollContainer: {
    backgroundColor: '#0f1014',
    height: 800
  },
  containerTextoLogin: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#0f1014',
  },
  textoLogin:{
    color: 'white',
    fontSize: 25,
    marginTop: '3%',
    marginBottom: '10%',
    textAlign: 'center'
  },
  textoLoginForm:{
    color: 'white',
    fontSize: 25,
    marginTop: '10%',
    marginLeft: '3%',
    marginBottom: '7%'
  },
  textoLoginForm2:{
    color: 'white',
    fontSize: 25,
    marginTop: '15%',
    marginLeft: '3%',
    marginBottom: '7%'
  },
  containerForm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#292a2e',
  },
  detalhe:{
    position: 'absolute',
    top: '3%',
    left: '5%',
    width: '10%',
    height: '0.5%',
    borderRadius: 4,
  },
  detalhe01: {
    position: 'absolute',
    top: '7%',
    left: '45%',
    width: '5%',
    height: '0.3%',
    borderRadius: 4,
    backgroundColor: '#77787c'
  },
  detalhe2: {
    position: 'absolute',
    top: '55%',
    left: '5%',
    width: '10%',
    height: '0.5%',
    borderRadius: 4,
  },
  section:{
    margin: '5%',
    flexDirection: 'row',
    gap: 5,
    width: '90%',
    justifyContent: 'space-between'
  },
  sectionA: {
    flexDirection: 'row'
  },
  paragraph:{
    color: 'white',
    marginLeft: '5%',
    fontSize: 16
  },
  checkbox: {
    backgroundColor: 'white'
  },
  link: {
    color:'#a195d6',
    fontSize: 16
  },
  containerTextoCadastro: {
    width: '90%',
    alignSelf: 'center'
  },
  textoCadastro: {
    color: 'white',
    fontSize: 18,
    marginTop: '5%',
    marginBottom: '8%'
  },
});