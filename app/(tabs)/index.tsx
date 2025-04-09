import { useState } from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
// import { PriceInput } from '@/components/PriceInput';
import CurrencyInput from 'react-native-currency-input';

export default function Index() {
  const [etanol, setEtanol] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [total, setTotal] = useState(0);
  const [custoBeneficio, setCustoBeneficio] = useState({ type: '', message: '' });

  function fuelCalculate() {
    const newTotal = etanol / gasolina;
    // Alert.alert('Diferença', 'diferença: ' + Math.round(newTotal * 100)/100); // total has the old value in the render

    if (etanol / gasolina <= 0.7) {
      setCustoBeneficio({ type: 'Etanol', message: 'Etanol' });
    } else {
      setCustoBeneficio({ type: 'Gasolina', message: 'Gasolina' });
    }
    
    setTotal(Math.round(newTotal * 100)/100);
  }

  // verificar se o valor do etanol é até 70% o valor da gasolina
  // se sim, retorna o valor do etanol
  // se não, retorna o valor da gasolina
  // const fuelCalculate = () => {
  //   if (etanol / gasolina <= 0.7) {
  //     Alert.alert('Etanol', 'Etanol é mais vantajoso');
  //   } else {
  //     Alert.alert('Gasolina', 'Gasolina é mais vantajoso');
  //   }
  // };   

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '80%' }}>
      <Text style={styles.text}>Qual é o preço do Etanol?</Text>
      {/* <PriceInput /> */}
      <CurrencyInput 
        value={etanol} 
        onChangeValue={(value) => setEtanol(value ?? 0)}
        prefix="R$ "
        delimiter=","
        separator="."
        precision={2}
        style={{
          margin: 20,
          height: 50,
          width: '50%',
          borderColor: '#fff',
          color: 'yellow',
          borderWidth: 1,
          paddingHorizontal: 10,
          fontSize: 18,
        }}
        placeholder="R$ 0,00"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        editable={true}
        selectTextOnFocus={true}
        caretHidden={false}
        autoFocus={false}
        maxLength={8}
      />
      
      <Text style={styles.text}>Qual é o preço da Gasolina?</Text>
      <CurrencyInput 
        value={gasolina} 
        onChangeValue={(value) => setGasolina(value ?? 0)}
        prefix="R$ "
        delimiter=","
        separator=","
        precision={2}
        style={{
          margin: 20,
          height: 50,
          width: '50%',
          borderColor: '#fff',
          color: 'yellow',
          borderWidth: 1,
          paddingHorizontal: 10,
          fontSize: 18,
        }}
        placeholder="R$ 0,00"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        editable={true}
        selectTextOnFocus={true}
        caretHidden={false}
        autoFocus={false}
        maxLength={8}
      />
      <Button onPress={fuelCalculate} title="Calcular" />
      
      <Text style={{
          color: '#fff',
          fontSize: 14,
          marginTop: 40,
          textAlign: 'center',
          fontWeight: 'bold',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
          textTransform: 'uppercase',
          letterSpacing: 2,
          borderRadius: 10,
          overflow: 'hidden',
          width: '70%',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8, 
        }}
      >
        Diferença de preço
      </Text>
      <Text 
        style={{
          color: '#fff',
          fontSize: 18,
          marginTop: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          textDecorationColor: 'yellow',
          textDecorationStyle: 'solid',
          textShadowColor: 'black',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
          textTransform: 'uppercase',
          letterSpacing: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 10,
          borderRadius: 10,
          overflow: 'hidden',
          borderWidth: 1,
          width: '50%',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8, 
        }}
      >
        R$ {total}</Text>
      <Text style={{
          color: '#fff',
          fontSize: 16,
          marginTop: 40,
          textAlign: 'center',
          fontWeight: 'bold',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
          textTransform: 'uppercase',
          letterSpacing: 2,
          borderRadius: 10,
          overflow: 'hidden',
          width: '70%',
          alignSelf: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8, 
        }}
      >
        Melhor custo benefício
      </Text>
      <Text 
        style={{
          color: 'green',
          fontSize: 20,
          marginTop: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          textDecorationColor: 'yellow',
          textDecorationStyle: 'solid',
          textShadowColor: 'black',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
          textTransform: 'uppercase',
          letterSpacing: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 10,
          borderRadius: 10,
          overflow: 'hidden',
          borderWidth: 1,
          width: '50%',
          margin: 20,
          alignSelf: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8, 
        }}
      >
        {custoBeneficio.message}</Text>
      {/* <Text style={styles.text}>Qual o consumo do carro?</Text> */}

      {/* <Link href="/about" style={styles.button}>
        Ir para sobre
      </Link> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});