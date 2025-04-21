import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSaldo } from "../contexto/ContaContexto";


const Saldo = (props) => {
    const {saldo} = useSaldo()

    return (
        <Text style={styles.text}>Saldo: {saldo} </Text>
    )
}

export default Saldo;



const styles = StyleSheet.create({
    text: ({
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        color: 'blue',
        fontWeight: 'bold'
    })
})

