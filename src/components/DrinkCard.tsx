import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IDrink} from '../data/Model';
import dayjs from 'dayjs';

interface IDrinkCard {
  item: IDrink;
  onPress: () => void;
}

const DrinkCard: React.FC<IDrinkCard> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex: 1}} onPress={props.onPress}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: props.item.strDrinkThumb}}
          style={styles.imageView}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{props.item.strCategory}</Text>
          </View>
        </ImageBackground>
        <View style={styles.infoView}>
          <Text style={styles.strGlassText}>{props.item.strGlass}</Text>
          <Text style={styles.strInstructionsText} numberOfLines={2}>
            {props.item.strInstructions}
          </Text>
          <Text>{dayjs(props.item.dateModified).format('MMMM D, YYYY')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    alignItems: 'flex-start',
  },
  infoView: {height: '35%', padding: 10, gap: 5},
  badge: {
    backgroundColor: 'blue',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
  },
  strGlassText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  strInstructionsText: {
    fontStyle: 'italic',
  },
});

export default DrinkCard;
