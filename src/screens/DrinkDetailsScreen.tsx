import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import Carousel from 'react-native-snap-carousel';
import CarouselImage from '../components/CarouselImage';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ParamList} from '../data/Model';
import dayjs from 'dayjs';

const DrinkDetailsScreen = () => {
  const carouselRef = React.useRef(null);
  const route = useRoute<RouteProp<ParamList, 'DrinkDetailsScreen'>>();

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={[
          {source: route.params.item.strDrinkThumb},
          {
            source:
              'https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg',
          },
          {
            source:
              'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
          },
        ]}
        renderItem={(element: {item: {source: string}; index: string}) => {
          return <CarouselImage source={element.item.source} />;
        }}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        containerCustomStyle={styles.containerCustomStyle}
      />

      <View style={styles.detailsView}>
        <Text style={styles.strGlassText}>{route.params.item.strGlass}</Text>
        <Text style={styles.strInstructionsText}>
          {route.params.item.strInstructions}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{route.params.item.strCategory}</Text>
        </View>
        <View style={styles.dateTextView}>
          <Text style={styles.dateText}>
            {dayjs(route.params.item.dateModified).format('MMMM D, YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsView: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  strGlassText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  strInstructionsText: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  containerCustomStyle: {
    flexGrow: 0,
  },
  dateTextView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dateText: {fontSize: 18, textAlign: 'center'},
  badge: {
    backgroundColor: 'blue',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DrinkDetailsScreen;
