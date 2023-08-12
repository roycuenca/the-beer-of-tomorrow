import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';

interface LayputProps {
  children: ReactNode;
}

const Layout: React.FC<LayputProps> = ({ children }) => {
  return (
    <View style={styles.containerLayout}>
      <SafeAreaView />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
});

export default Layout;
