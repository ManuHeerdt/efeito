import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function App() {
  const [mensagem, setMensagem] = useState("Carregando frase emotivacional...");
  useEffect(() => {
    setTimeout(() => {
      setMensagem("Erros são provas de que você está tentando.");
    }, 5000);
  }, []);

  return (
    <View style={{ marginTop: 50, fontSize: 80 }}>
      <Text>{mensagem}</Text>
    </View>
  );
}