import React from "react";
import {View, Text} from "react-native";
import { Button } from 'react-native-paper';

const HomePage = () => {

    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text>Puc Minas</Text>          
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressionado')}>
             Toque Aqui
            </Button>
        </View>
        
    );

}

export default HomePage;
3