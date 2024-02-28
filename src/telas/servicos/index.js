import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item/index';


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

export default function Servicos(){
    return <>
        <FlatList
            data ={servicos}
            renderItem ={({item}) => <Item {...item}/> }
            keyExtractor ={({id}) => String(id)}
            
           />

    </>
            
 
    
}