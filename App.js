import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import Boton from './src/components/Boton';
import Input from './src/components/Input';

export default function App() {

  //escribir codigo Js
  //State de la aplicación
  const [numero1, setNumero1]=useState(0)
  const [numero2, setNumero2]=useState(0)
  const [resultado, setResultado]= useState(0)

  //hacer que se sumen dos numeros

  const suma = ()=>{
    let sumatoria=(parseFloat(numero1)+parseFloat(numero2));
    setResultado(sumatoria);
  }

  const resta = ()=>{
    let sumatoria=(parseFloat(numero1)-parseFloat(numero2));
    setResultado(sumatoria);
  }

  const multi = ()=>{
    let sumatoria=(parseFloat(numero1)*parseFloat(numero2));
    setResultado(sumatoria);
  }

  const divi = ()=>{
    let sumatoria=(parseFloat(numero1)/parseFloat(numero2));
    setResultado(sumatoria);
  }

  const limpiar = ()=>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }

  return (  
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Calculadora</Text>
      <Text style={{color: 'white'}}>Numero 1: </Text>
      <Input
        textPlaceHolder='Numero 1'
        value={numero1}
        valorSetNumero={setNumero1}
      />

      <Input
        textPlaceHolder='Numero 2'
        value={numero2}
        valorSetNumero={setNumero2}
      />

      <Boton
        texto='Sumar numeros'
        funcion={suma}
      />

      <Boton
        texto='Restar numeros'
        funcion={resta}
      />

      <Boton
        texto='Multiplicar numeros'
        funcion={multi}
      />

      <Boton
        texto='Dividir numeros'
        funcion={divi}
      />

      <Text style={{color: 'white', fontSize:20}}>Numero 1: {numero1}</Text>
      <Text style={{color: 'white', fontSize:20}}>Numero 2: {numero2}</Text>
      <Text style={{color: 'white', fontSize:20}}>Sumatoria: {resultado}</Text>

      <TouchableOpacity style={{backgroundColor: 'red',
       padding:5}}
       onPress={limpiar}
       >
        <Text style={{color: '#FFF', 
        fontSize:20}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});