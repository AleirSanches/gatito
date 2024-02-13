import  React from 'react';
import {TextInput} from 'react-native';
import estilos from '../../telas/servicos/Item/estilos';

export default function CampoInteiro({valor, acao}){
     const numeroEmTexto =String(valor);
     return<TextInput
         keyboardType='number-pad'
         selectTextOnFocus
         onChangeText={(novoValor) =>{acao(novoValor)}}
         value={numeroEmTexto}
         style={estilos.preco}
     
     />
}