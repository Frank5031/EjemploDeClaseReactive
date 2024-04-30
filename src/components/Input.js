import { Text, TextInput, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Input({
    textPlaceHolder,
    valorNumero,
    valorSetNumero
}){
    return(
        <TextInput
        placeholderTextColor={'red'}
        style={{backgroundColor:'white', color:'blue', margin:10}}
        placeholder={textPlaceHolder}
        value={valorNumero}
        onChangeText={valorSetNumero}
        />
    )
}