import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Title, Paragraph, List, Divider } from 'react-native-paper';

import { useBeerContext } from '../Context/BeerContext';
import Layout from '../components/Layout.tsx/Layout';
import Loader from '../components/Loader/Loader';

const BeerDetail = () => {
  const { beerSelected, isLoading } = useBeerContext();

  return (
    <Layout>
      {isLoading ? (
        <View style={styles.loaderContent}>
          <Loader />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: beerSelected?.image_url }}
            style={styles.image}
          />

          <View style={styles.detailsContainer}>
            <Divider style={styles.divider} />

            <Title style={styles.title}>{beerSelected?.name}</Title>
            <Paragraph>{beerSelected?.tagline}</Paragraph>

            <Divider style={styles.divider} />

            <Paragraph>{beerSelected?.description}</Paragraph>

            <Divider style={styles.divider} />

            <Title style={styles.title}>Ingredients</Title>
            <List.Section>
              {beerSelected?.ingredients.malt.map((malt, index) => (
                <List.Item
                  key={index}
                  title={malt.name}
                  description={`${malt.amount.value} ${malt.amount.unit}`}
                />
              ))}
            </List.Section>

            <Divider style={styles.divider} />

            <Title style={styles.title}>Food Pairing</Title>
            <Paragraph>{beerSelected?.food_pairing.join(', ')}</Paragraph>

            <Divider style={styles.divider} />

            <Title style={styles.title}>Brewer's Tips</Title>
            <Paragraph>{beerSelected?.brewers_tips}</Paragraph>
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  detailsContainer: {
    padding: 16,
  },
  divider: {
    marginVertical: 10,
  },
  loaderContent: {
    marginTop: '10%',
  },
  title: {
    fontWeight: '700',
  },
});

export default BeerDetail;
