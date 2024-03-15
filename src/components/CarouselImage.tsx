import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface ICarouselImage {
  source: string | null;
}

const CarouselImage: React.FC<ICarouselImage> = props => {
  return (
    <View style={styles.container}>
      <Image
        style={{flex: 1}}
        source={props.source ? {uri: props.source} : undefined}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    // height: 300,
  },
});

export default CarouselImage;
