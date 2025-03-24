import { View, Text, StyleSheet, Image } from "react-native"
import Slider from '@react-native-community/slider'

export default function App(){
  return(
    <View style={styles.container}>
      <Image
        source={require("./src/assets/LogoCadeado2.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>2  CARACTERES</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}

        />

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
    width: 200,
    height: 200,
    resizeMode: 'contain'    
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF'

  },
  title: {
    
  }


})