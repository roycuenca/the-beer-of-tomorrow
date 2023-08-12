import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../../utils/globalStyles/GlobalStyles';

interface ProductCardProps {
  name: string;
  tagline: string;
  image_url: string;
  handleOnPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  image_url,
  handleOnPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handleOnPress()}
    >
      <ImageBackground
        source={{ uri: image_url }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <View style={styles.textContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.descriptionText} numberOfLines={2}>
          {tagline}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 220,
    width: 150,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: 'white',

    borderColor: GlobalStyles.colors.GRAY_SHADOWN,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.17,
    shadowRadius: 5.46,

    elevation: 5,
  },
  cardImage: {
    flex: 1,
    margin: 15,
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: GlobalStyles.colors.PRIMARY,
    fontWeight: '700',
  },
  descriptionText: {
    color: GlobalStyles.colors.BLACK,
    fontSize: 12,
  },
  textContent: {
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
});

export default ProductCard;
