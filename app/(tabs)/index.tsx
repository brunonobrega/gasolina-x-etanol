import { useState } from "react";
import { ScrollView, Text, Button, View, StyleSheet } from "react-native";
import CurrencyInput from 'react-native-currency-input';

export default function Index() {
  const [ethanol, setEthanol] = useState(0);
  const [gasoline, setGasoline] = useState(0);
  const [priceDiff, setPriceDiff] = useState(0);
  const [pricePercentageDiff, setPricePercentageDiff] = useState(0);
  const [custoBeneficio, setCustoBeneficio] = useState({ type: '', message: '' });

  // calculation of the best cost-benefit between ethanol and gasoline
  // Ethanol / Gasoline <= 0.7
  function fuelCalculate() {
    const differencePrice = ethanol - gasoline;
    const priceAverage = (ethanol + gasoline) / 2;
    const differencePercentage  = (differencePrice / priceAverage) * 100;

    if (ethanol / gasoline <= 0.7) {
      setCustoBeneficio({ type: 'Ethanol', message: 'Etanol' });
    } else {
      setCustoBeneficio({ type: 'Gasoline', message: 'Gasolina' });
    }

    // Price percentage difference %
    setPricePercentageDiff(Math.abs(differencePercentage));
    // Price difference $
    setPriceDiff(Math.abs(differencePrice));
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container} style={{ width: '100%' }}>
      <Text style={styles.text}>Qual é o preço do Etanol?</Text>
      {/* <PriceInput /> */}
      <CurrencyInput 
        value={ethanol}
        onChangeValue={(value) => setEthanol(value ?? 0)}
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
      
      <Text style={styles.text}>Qual é o preço da Gasolina?</Text>
      <CurrencyInput 
        value={gasoline} 
        onChangeValue={(value) => setGasoline(value ?? 0)}
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
      
      <View style={styles.row}>
        <View style={styles.columnItem}>
          <Text style={styles.headlineDifference}>
            Diferença de preço em R$
          </Text>

          <Text style={styles.fuelDifference}>
            R$ {priceDiff.toFixed(2)}
          </Text>
        </View>

        
        <View style={styles.columnItem}>
          <Text style={styles.headlineDifference}>
            Diferença de preço
             em %
          </Text>

          <Text style={styles.fuelDifference}>
            {pricePercentageDiff.toFixed(2)}%
          </Text>
        </View>
      </View>

      <Text style={styles.headlineResult}>
        Melhor custo benefício
      </Text>

      <Text style={styles.fuelResult}>
        {custoBeneficio.message}
      </Text>

      {/* <Text style={styles.text}>Qual é o consumo médio do veículo por litro?</Text> */}
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
  row: {
    flexDirection: 'row',
  },
  columnItem: {
    width: '50%',
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  headlineDifference: {
    color: '#fff',
    fontSize: 8,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8, 
  },
  fuelDifference: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationColor: 'yellow',
    textDecorationStyle: 'solid',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0,
    width: '70%',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  headlineResult: {
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
  },
  fuelResult: {
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
  },
});