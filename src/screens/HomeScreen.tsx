import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import axios from 'axios';
import reactotron from 'reactotron-react-native';
import {IDrink} from '../data/Model';
import DrinkCard from '../components/DrinkCard';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/NewStoreNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const [visibleDrinksList, setVisibleDrinksList] = useState<IDrink[]>([]);
  const [allDrinksList, setAllDrinksList] = useState<IDrink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<{drinks: IDrink[]}>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s',
      )
      .then(response => {
        const data = response.data.drinks;
        setVisibleDrinksList(data.slice(0, 10));
        setAllDrinksList(data);
        reactotron.log('Response:', response.data);
      })
      .catch(error => {
        // Handle error
        reactotron.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onEndReached = () => {
    setVisibleDrinksList(prev => {
      const lastVisibleDrinkIndex = allDrinksList.indexOf(
        prev[prev.length - 1],
      );
      const nextVisibleDrinks = allDrinksList.slice(
        lastVisibleDrinkIndex + 1,
        lastVisibleDrinkIndex + 11,
      );
      return [...prev, ...nextVisibleDrinks];
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={visibleDrinksList}
          renderItem={({item}) => (
            <DrinkCard
              onPress={() => {
                navigation.navigate('DrinkDetails', {item});
              }}
              key={item.idDrink}
              item={item}
            />
          )}
          contentContainerStyle={styles.flatListContentContainer}
          numColumns={2}
          columnWrapperStyle={{gap: 10}}
          initialNumToRender={10}
          onEndReached={onEndReached}
          ListFooterComponent={<View style={styles.listFooterView} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  flatListContentContainer: {
    gap: 10,
    padding: 10,
  },
  listFooterView: {
    height: 100,
  },
  loadingView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
