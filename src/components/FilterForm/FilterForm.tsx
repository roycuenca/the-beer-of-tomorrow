import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { useBeerContext } from '../../Context/BeerContext';
import { GlobalStyles } from '../../utils/globalStyles/GlobalStyles';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const FilterForm = () => {
  const { filterByBeerName, filterByBeerFoodPairing } = useBeerContext();
  const [nameQuery, setNameQuery] = useState('');
  const [foodQuery, setFoodQuery] = useState('');
  const [toggleSearchNameButton, setToggleSearchNameButton] =
    useState<boolean>(true);
  const [toggleSearchFoodButton, setToggleSearchFoodButton] =
    useState<boolean>(true);

  const getNameQueryValue = (query: string) => {
    setNameQuery(query);
  };
  const getFoodQueryValue = (query: string) => {
    setFoodQuery(query);
  };

  const searchByName = () => {
    filterByBeerName(nameQuery.trim());
    setToggleSearchNameButton(!toggleSearchNameButton);
  };

  const searchByFood = () => {
    filterByBeerFoodPairing(foodQuery);
    setToggleSearchFoodButton(!toggleSearchFoodButton);
  };

  const clearFilter = () => {
    setNameQuery('');
    setFoodQuery('');
    filterByBeerName('');
    setToggleSearchNameButton(true);
    setToggleSearchFoodButton(true);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          customStyles={styles.input}
          placeholder="Search Beer Name"
          value={nameQuery}
          onChange={getNameQueryValue}
        />
        {toggleSearchNameButton ? (
          <Button
            text="Search"
            mode="contained"
            customStyles={styles.buttonStyle}
            labelStyles={styles.buttonLabel}
            onPressButton={() => searchByName()}
          />
        ) : (
          <Button
            text="Clear Filter"
            mode="contained"
            customStyles={styles.buttonStyle}
            labelStyles={styles.buttonLabel}
            onPressButton={() => clearFilter()}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          customStyles={styles.input}
          placeholder="Search Food Pairing"
          value={foodQuery}
          onChange={getFoodQueryValue}
        />
        {toggleSearchFoodButton ? (
          <Button
            text="Search"
            mode="contained"
            customStyles={styles.buttonStyle}
            labelStyles={styles.buttonLabel}
            onPressButton={() => searchByFood()}
          />
        ) : (
          <Button
            text="Clear Filter"
            mode="contained"
            customStyles={styles.buttonStyle}
            labelStyles={styles.buttonLabel}
            onPressButton={() => clearFilter()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 35,
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.PRIMARY,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  buttonStyle: {
    width: '40%',
    marginVertical: 10,
    borderColor: GlobalStyles.colors.PRIMARY,
    backgroundColor: GlobalStyles.colors.PRIMARY,
    borderRadius: 8,
  },
  buttonLabel: {
    color: GlobalStyles.colors.WHITE,
  },
});

export default FilterForm;
