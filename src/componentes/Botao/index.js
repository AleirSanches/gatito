import React  from 'react';
import {TouchableOpacity, Text} from 'react-native';
import funcaoEstilos from './estilos';


export default function Botao({pequeno =false, invertido = false,valor, acao, estilos}){
    const estlosPadrao = funcaoEstilos(pequeno, invertido)
    return <TouchableOpacity onPress={acao} style={[estlosPadrao.botao, estilos ]}>
        <Text style={estlosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}