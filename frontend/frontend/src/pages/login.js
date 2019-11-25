import React from 'react';
import { StyleSheet, View, AsyncStorage, Text, TextInput,TouchableOpacity, Image } from "react-native";

import logo from './assets/img/logo.png';



export default function Login({ navigation }){
  
  async function handleSubmitLogin(){
    navigation.navigate('Main')
  }
  async function handleSubmitCadastrar(){
    navigation.navigate('Cadastro')
  }
  
  return (
    <View style={styles.container}>
    <Text style={styles.parteLogo} >      Feira de profições        </Text>
    <Image style={styles.imgLogo} source={logo} />
       {/* <Text style={styles.logo} >UNIFAE</Text> */}

       <View style={styles.form}>

        {/* <Text style={styles.label} >Email:</Text> */}
        <TextInput
         autoCapitalize="none" 
         placeholder="Email" 
         style={styles.input} 
         placeholderTextColor='#CCCDCD'
         keyboardType="email-address"
         />

        {/* <Text style={styles.label} >Senha:</Text> */}
        <TextInput
         autoCapitalize="none" 
         placeholder="Senha" 
         style={styles.input} 
         placeholderTextColor='#CCCDCD'
         secureTextEntry
         />
       

        <TouchableOpacity onPress={handleSubmitLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

       </View>
       <View style={styles.criarConta}>
        <Text style={styles.criarConta1} >Ainda não tem conta? </Text>
        <Text onPress={handleSubmitCadastrar} style={styles.criarConta2} >Criar conta</Text>
       </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#222154',
    // backgroundColor:'#20305E',
    // ********** backgroundColor:'#001426',
      backgroundColor:'#1C2122',
    
    alignItems: 'center',
    justifyContent:'center',
  },
  parteLogo:{
    fontSize:24,
    color:'#f3f3f3',
  },
  imgLogo:{
    marginBottom:70,
  },
  logo:{
    // color:'#36509E',
    //  color:'#273A73',
    // ********** color:'#1C3F70',
     color:'#89C54B',
    //  color:'#C7C7C7',
     //color:'#619123',
    // textDecorationLine:'underline',
    
    fontFamily:'Gamer',
    fontSize:55,
    fontWeight:'bold',
    textShadowOffset: {width:0, height:5},
    
    textShadowRadius:30,
    textShadowColor:'#000',
    marginBottom:50,
  },
  input:{
    height:50,
    alignSelf:'stretch',
    // backgroundColor:'#FFF',
    color:"#f9f9f9",
    borderBottomWidth:1,
    borderColor:'#999999',
    marginTop:10,
    paddingHorizontal: 15,
    marginHorizontal:20,
  },
  form:{
    width:'100%',
    textAlign:'left',
  },
  label:{
    color:'#f3f3f3',
    fontSize:18,
    // fontWeight:'bold',
    marginTop:15,
    marginHorizontal:20,
    },
    button:{
      height:48,
      alignSelf:'stretch',
      backgroundColor:'#89C54B',
      borderRadius:6,
      
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
      marginHorizontal:20,
    },
    buttonText:{
      color:'#222222',
      fontWeight:'bold',
      fontSize:18
    },
  criarConta:{
    flexDirection:'row',
    marginTop:35,
    marginBottom:-20,
  },
  criarConta1:{
    fontSize:18,
    color:'#f3f3f3',
    textShadowOffset: {width:0, height:2},
    textShadowRadius:1,
    textShadowColor:'#000',
  },
  criarConta2:{
  color:'#89C54B',
  fontSize:18,
  fontWeight:'bold',
  textShadowOffset: {width:0, height:1},
  textShadowRadius:30,
  textShadowColor:'#000',
  },

  
});