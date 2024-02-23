import React from 'react';
import {Text, FlatList, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import Item from './Item/index';
import estilosUniversal from '../../estilos';

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DE BANHO NO SEU GATO ! mas se precisar nos damos",

    },
    {
        id:2,
        nome: "Vacina V4",
        preco: 120.00,
        descricao: " De uma dose de Vacina ao seu gato, ele precisa",
    },
    {
        id: 3,
        nome: "Vacina Anti Rabica",
        preco: 110.00,
        descricao: "Proteja seu Pet contra a raiva",
    }
]

export default function Carrinho(){
    return <SafeAreaView style={estilosUniversal.preencher}>
        <StatusBar/>
        <KeyboardAvoidingView
          behavior= {Platform.OS == 'ios' ? 'padding' : 'height'}
          style={estilosUniversal.preencher}
          
        >
            
           <FlatList
            data ={servicos}
            renderItem ={({item}) => <Item {...item}/> }
            keyExtractor ={({id}) => String(id)}
            
           />
        </KeyboardAvoidingView>       
        
    

    </SafeAreaView>
    

    
}