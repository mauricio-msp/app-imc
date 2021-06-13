import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type InputProps = {
  isFocused?: boolean;
}


export const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

export const KeyboardContent = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput<InputProps>`
  width: 50%;
  height: 80px;
  padding: 16px;
  font-size: 30px;
  text-align: center;
  border-bottom-color: ${props => props.isFocused ? colors.blue : colors.white};
  border-bottom-width: 2px;
  color: ${colors.blue};
  font-family: ${fonts.textInput};
  background-color: ${colors.white};
`;

export const ResultView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue_light};
`;

export const ResultText = styled.Text`
  color: ${colors.blue};
  font-size: 130px;
  font-family: ${fonts.textResult};
`;

export const ResultDesc = styled.Text`
  color: ${colors.blue};
  font-size: 30px;
  font-family: ${fonts.textResult};
  text-transform: uppercase;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  background-color: ${colors.blue};
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-family: ${fonts.textButton};
`;
