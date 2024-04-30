import { Text,TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({texto, funcion}){
    return(
    <TouchableOpacity 
       onPress={funcion}
       style={{backgroundColor: 'blue', margin: 9, borderRadius: 10,
       padding:5}}
       >
        <Text style={{color: '#FFF', 
        fontSize:16}}>{texto}</Text>
      </TouchableOpacity>
    )
}
