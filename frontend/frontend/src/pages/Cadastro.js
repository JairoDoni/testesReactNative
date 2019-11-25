import React, { Component } from 'react';
import {StyleSheet,View, Text,TextInput,TouchableOpacity, ScrollView, Image } from "react-native";

import arrow from './assets/icons/left-arrow2.1.png';
// import arrow from './assets/icons/arrow-left-solid.svg';

class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
        autoCapitalize="none"
        placeholder={this.props.type}
        style={styles.input} 
        placeholderTextColor='#CCCDCD'
        />
      </View>
    );
  }
}

export default function Cadastro(){
  return (
    <ScrollView style={styles.scroll}>
      
      <View style={styles.barra}>

        
            <TouchableOpacity style={styles.back}>
              <Image source={arrow} />
            </TouchableOpacity>
        

        <Text style={styles.textBarra}>Cadastro</Text>

      </View>

      <View style={styles.container}>
        
        <View style={styles.form}>
      
          <Input type="Nome"/>
          <Input type="Email"/>
          <Input type="Senha"/>
          <Input type="Idade"/>
          <Input type="Telefone"/>
          <Input type="Cidade"/>
          <Input type="Escola"/>
          <Input type="Curso pretendido"/>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.criarConta}>
          <Text style={styles.criarConta1} >Ja tem conta? </Text>
          <Text style={styles.criarConta2} >Login</Text>
        </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll:{
    backgroundColor:'#1C2122'
  },
  container:{
    flex:1,
    backgroundColor:'#1C2122',
    alignItems: 'center',
    justifyContent:'center',
  },
  barra:{
    height:70,
    flex:1,
    backgroundColor:'#89C54B',
    alignItems: 'stretch',
    
    flexDirection: 'row',
  },
  // icon:{
  //   flex:2,
  //   width:50,
  //   alignItems: 'flex-start',
  //   marginTop:5,
  //   marginHorizontal:5,
  // },
  back:{
    width:64,
    height:64,
    marginTop:5,
    // borderWidth:1,
    // borderColor:'blue',
  },
  textBarra:{
    color:'#222222',
    fontSize:22,
    marginHorizontal:'25%',
    marginTop:20,
    
    // borderWidth:1,
    // borderColor:'blue',
  },
  input:{
    height:50,
    alignSelf:'stretch',
    borderBottomWidth:0.5,
    borderColor:'#CCCDCD',
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
    marginTop:30,
    marginBottom:30
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