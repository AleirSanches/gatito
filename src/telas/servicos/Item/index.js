import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import estilos from './estilos';
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

export default function Item ({nome, preco, descricao}){
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] =useState(false);

    const expandirTela = () =>{
      setExpandir(!expandir);
      calculaTotalQuantidade(1);
    }

    const calculaTotal =(novaQuantidade) => {
       setTotal(novaQuantidade * preco)
    }

    const calculaTotalQuantidade = (novaQuantiade) => {
      setQuantidade(novaQuantiade);
      calculaTotal(novaQuantiade);
    }
    return <>
        <TouchableOpacity style={estilos.informacao} onPress={expandirTela}>
          < Text style={estilos.nome}>{nome}</Text>
          < Text style={estilos.descricao}>{descricao}</Text>
          < Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'
          }).format(preco)
          }
          </Text>
        </TouchableOpacity>
       {!expandir &&
            <View style={estilos.carrinho}>
            <View>
              <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade:</Text>
                <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={calculaTotalQuantidade }/>  
                </View>            
              <View style={estilos.valor}>
                  <Text style={estilos.descricao}>Total</Text>
                  <Text style={estilos.preco}>{
                    Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'
                  }).format(total)
                  }</Text>

                
              </View>
              </View>
              <Botao valor= "Adicionar ao Carrinho" acao={() => {}}/>

          </View>
          }
       <View style={estilos.divisor}/>
    </>
}