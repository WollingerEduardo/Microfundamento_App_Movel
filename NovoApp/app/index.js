import { useState } from 'react'
import React from 'react'
import {View, StyleSheet, Text, Button, TextInput} from 'react-native'
import Saldo from '../src/components/Saldo'
import Lancamento from '../src/components/Lancamento'
import SaldoProvider from '../src/contexto/ContaContexto'




const App = () => {
  
  return (
    <SaldoProvider>
    <View style={styles.container}>
      <Text style={styles.title}>Microfundamento Desenvolvimento App Mobile</Text>

      <Saldo/>

      <Lancamento Credito />

      <Lancamento/>
        
    </View>

    </SaldoProvider>
  )

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 25,
    
  },
  title: ({
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }),
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 0,
    marginBottom: 30,
    borderWidth: 1,
    alignContent: 'center'
  },
  
})

