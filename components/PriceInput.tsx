import React from 'react';
import CurrencyInput from 'react-native-currency-input';

export function PriceInput() {
  const [value, setValue] = React.useState<number | null>(2310.458);

  return (
    <CurrencyInput 
      value={value} 
      onChangeValue={setValue}
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
  );
}