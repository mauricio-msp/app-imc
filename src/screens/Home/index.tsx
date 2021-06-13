import React, { useRef, useState } from 'react';
import { Alert, Platform, StatusBar, TextInput } from 'react-native';
import {
  Button,
  Content,
  Input,
  InputGroup,
  KeyboardContent,
  ResultView,
  ResultText,
  ResultDesc,
  SafeContainer,
  TextButton,
} from './styles';

import colors from '../../styles/colors';

function Home() {
  const inputHeightRef = useRef<TextInput>(null);
  const inputWeightRef = useRef<TextInput>(null);

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [resultText, setResultText] = useState('');

  const [focusHeight, setFocusHeight] = useState(false);
  const [focusWeight, setFocusWeight] = useState(false);

  function handleInputHeight(value: string) {
    setHeight(Number(value));
  }

  function handleInputWeight(value: string) {
    setWeight(Number(value));
  }

  function handleInputFocusHeight() {
    setFocusHeight(true);
  }

  function handleInputFocusWeight() {
    setFocusWeight(true);
  }

  function handleInputBlurHeight() {
    setFocusHeight(false);
  }

  function handleInputBlurWeight() {
    setFocusWeight(false);
  }

  function handleIMC() {
    if (!height || !weight) {
      Alert.alert(
        'Campos vazios',
        'Preencha os campos (altura e peso) para ver o resultado do seu IMC.',
      );

      if (height) {
        inputWeightRef.current?.focus();

        return;
      }

      inputHeightRef.current?.focus();

      return;
    }

    const resultCalc = weight / Math.pow(height, 2);

    if (resultCalc < 18.5) {
      setResultText('magreza');
    }

    if (resultCalc >= 18.5 && resultCalc <= 24.9) {
      setResultText('normal');
    }

    if (resultCalc >= 25 && resultCalc <= 29.9) {
      setResultText('sobrepeso');
    }

    if (resultCalc >= 30 && resultCalc <= 39.9) {
      setResultText('obesidade grau i');
    }

    if (resultCalc > 40) {
      setResultText('obesidade grau ii');
    }

    inputHeightRef.current?.blur();
    inputWeightRef.current?.blur();

    setResult(resultCalc);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      <SafeContainer>
        <KeyboardContent
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <Content>
            <InputGroup>
              <Input
                ref={inputHeightRef}
                isFocused={focusHeight}
                placeholder="Altura (m)"
                keyboardType="numeric"
                selectionColor={colors.blue}
                onFocus={handleInputFocusHeight}
                onBlur={handleInputBlurHeight}
                onChangeText={handleInputHeight}
              />
              <Input
                ref={inputWeightRef}
                isFocused={focusWeight}
                placeholder="Peso (Kg)"
                keyboardType="numeric"
                selectionColor={colors.blue}
                onFocus={handleInputFocusWeight}
                onBlur={handleInputBlurWeight}
                onChangeText={handleInputWeight}
              />
            </InputGroup>

            <ResultView>
              <ResultText>{result.toFixed(2)}</ResultText>
              <ResultDesc>{resultText}</ResultDesc>
            </ResultView>

            <Button onPress={handleIMC}>
              <TextButton>Calcular</TextButton>
            </Button>
          </Content>
        </KeyboardContent>
      </SafeContainer>
    </>
  );
}

export {Home};
