import React from 'react';
import { StyleSheet, View, Text,} from 'react-native';

// import Routes from './src/routes';

export default function App() {
  return (
            <View style={styles.container}>
              <Text >Testando Tela</Text>
              <Text>Aprendendo React Native
              </Text>
            </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});


