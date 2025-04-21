import { useState } from "react";
import React from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { useSaldo } from "../contexto/ContaContexto";

const Lancamento = (props) => {

    //const [valor, setValor] = useState(0);
    const {saldo, setSaldo} = useSaldo();
    const [valor, setValor] = useState(0);

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={setValor}
                valor={valor}
                placeholder="0,00"
                keyboardType="numeric" 
            />
            
            <Button
                title={props.Credito ? 'Adicionar Saldo' : 'Subtrair Saldo'}
                style={styles.button}
                color={props.Credito ? 'green' : 'red'}
                onPress={() => {
                    if(props.Credito) {
                        setSaldo(saldo + Number(valor));
                    }else
                        setSaldo(saldo - Number(valor));
                    
                } } 
            />        
        </>
              
    );
};

export default Lancamento;

const styles = StyleSheet.create({
    input: {
      height: 40,
      //margin: 1,
      marginTop: 40,
      //borderWidth: ,
      padding: 0,
      marginBottom: 10,
      borderWidth: 1,
      alignContent: 'center'
    },
    
  })