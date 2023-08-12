import React from 'react';
import { ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { GlobalStyles } from '../../utils/globalStyles/GlobalStyles';

interface TextInputProps {
  customStyles?: ViewStyle;
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  labelColor?: string;
}

const TextInputComponent: React.FC<TextInputProps> = ({
  customStyles,
  placeholder,
  value,
  onChange,
  labelColor = GlobalStyles.colors.PRIMARY,
}) => {
  const inputTheme = {
    colors: {
      text: labelColor,
      primary: GlobalStyles.colors.PRIMARY,
      placeholder: GlobalStyles.colors.PRIMARY,
    },
  };

  return (
    <TextInput
      style={customStyles}
      placeholder={placeholder}
      value={value}
      onChangeText={(value) => onChange(value)}
      theme={inputTheme}
    />
  );
};

export default TextInputComponent;
