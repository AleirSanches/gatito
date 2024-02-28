import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from './src/Rotas';
import TelaParao from './src/componentes/TelaPadrao';

export default function App() {
  return <TelaParao><Rotas/></TelaParao> 
   
}

