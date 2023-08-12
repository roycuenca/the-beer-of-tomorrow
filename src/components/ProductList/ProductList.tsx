import React, { useState, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';

import { useBeerContext } from '../../Context/BeerContext';
import { GlobalStyles } from '../../utils/globalStyles/GlobalStyles';
import { ROUTES } from '../../navigation/Routes';
import ProductCard from '../Card/ProductCard';
import Loader from '../Loader/Loader';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const { allBeers, fetchMoreBeers, isLoading, getBeerByIdSelected } =
    useBeerContext();
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase, any>>();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const flatListRef = useRef<FlatList<any> | null>(null);

  const handleScroll = (event: {
    nativeEvent: {
      contentOffset: { y: number };
      contentSize: { height: number };
    };
  }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;

    setShowScrollToTop(offsetY > 300);

    if (!hasReachedEnd && offsetY > contentHeight - 1000) {
      setHasReachedEnd(true);
      fetchMoreBeers();
    } else if (offsetY <= contentHeight - 1000) {
      setHasReachedEnd(false);
    }
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const onPressCard = (id: string) => {
    getBeerByIdSelected(id);
    navigate(ROUTES.DETAILS);
  };

  return (
    <>
      <FlatList
        numColumns={2}
        ref={flatListRef}
        data={allBeers}
        renderItem={({ item }) => (
          <ProductCard
            name={item?.name}
            tagline={item?.tagline}
            image_url={item?.image_url}
            handleOnPress={() => onPressCard(item?.id)}
          />
        )}
        keyExtractor={(item) => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        onScroll={handleScroll}
        ListFooterComponent={isLoading ? <Loader /> : null}
      />
      {showScrollToTop && (
        <FAB
          style={styles.fab}
          small
          icon="chevron-up"
          onPress={scrollToTop}
          color="white"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  fab: {
    position: 'absolute',
    backgroundColor: GlobalStyles.colors.PRIMARY,
    bottom: 40,
    right: 20,
  },
});

export default ProductList;
