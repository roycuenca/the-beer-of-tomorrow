import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { GlobalStyles } from '../utils/globalStyles/GlobalStyles';
import Layout from '../components/Layout.tsx/Layout';
import ProductList from '../components/ProductList/ProductList';
import FilterForm from '../components/FilterForm/FilterForm';
import Button from '../components/Button/Button';

const Home = () => {
  const [toggleFilters, setToggleFilters] = useState(false);

  return (
    <Layout>
      <Button
        text={toggleFilters ? 'Hide filters' : 'Find your beer'}
        onPressButton={() => setToggleFilters(!toggleFilters)}
        customStyles={styles.buttonStyle}
      />

      {toggleFilters && <FilterForm />}
      <ProductList />
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: GlobalStyles.colors.PRIMARY,
    width: '100%',
    marginVertical: 10,
  },
});

export default Home;
