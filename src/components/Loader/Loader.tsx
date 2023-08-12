import React from 'react';
import { ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../../utils/globalStyles/GlobalStyles';

interface LoaderProps {
  size?: 'large' | 'small';
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size, color }) => {
  return (
    <ActivityIndicator
      size={size ?? 'small'}
      color={color ?? GlobalStyles.colors.PRIMARY}
    />
  );
};

export default Loader;
