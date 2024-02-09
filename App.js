import React from 'react';

import Servicos from './src/telas/servicos';
import {SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return <SafeAreaView style= {estilos.tela}>
    <Servicos/>
    </SafeAreaView>
}

const estilos =StyleSheet.create({
  tela:{
        flex:1,
        backgroundColor:'#FFFFFF',
  }
})



export default App;