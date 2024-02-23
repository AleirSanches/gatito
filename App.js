import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


import Carrinho from './src/telas/Carrinho';
import {SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return <SafeAreaView style= {estilos.tela}>
    <Carrinho/>
    </SafeAreaView>
}

const estilos =StyleSheet.create({
  tela:{
        flex:1,
        backgroundColor:'#FFFFFF',
  }
})



export default App;