import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const HotelsScreen = ({ navigation, route }) => {
  const { destination } = route.params;

  // Dummy hotel data
  const hotels = [
    {
      id: 1,
      name: 'Destination Stay',
      image: require('../assets/hotel_a.jpg'),
      price: 150,
    },
    {
      id: 2,
      name: 'Hotel Novotel',
      image: require('../assets/hotel_b.jpg'),
      price: 200,
    },
    {
      id: 3,
      name: 'Holiday Inn',
      image: require('../assets/hotel_c.jpg'),
      price: 180,
    },
    // Add more hotels as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Book Now', { hotel: item, destination: destination })}>
      <View style={styles.hotel}>
        <ImageBackground source={item.image} style={styles.image}>
          <Text style={styles.hotelName}>{item.name}</Text>
          <Text style={styles.price}>Price: ${item.price} per night</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hotel: {
    margin: 10,
    width: '90%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  price: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});

export default HotelsScreen;
