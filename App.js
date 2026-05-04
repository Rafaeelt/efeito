import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [mensagem,setMensagem]= useState("Carregando.....")
useEffect(()=>{
  setTimeout(()=>{setMensagem("Bem Vindo ao app");
  },2000 );
},[]);


  return (
    <View style={{marginTop:50, fontSize:80}}>
      <Text> {mensagem} </Text>
    </View>
  );
}
