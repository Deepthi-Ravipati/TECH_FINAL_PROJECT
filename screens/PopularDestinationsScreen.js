import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet, TextInput } from 'react-native';

const PopularDestinationsScreen = ({ navigation }) => {
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: require('../assets/paris.jpg'),
      description: 'Explore the city of love and lights!',
    },
    {
      id: 2,
      name: 'New York City, USA',
      image: require('../assets/new_york.jpg'),
      description: 'Experience the hustle and bustle of the Big Apple!',
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: require('../assets/tokyo.jpg'),
      description: 'Discover the vibrant culture and cuisine of Tokyo!',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = destinations.filter(destination =>
      destination.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Hotels', { destination: item })}>
      <View style={styles.destination}>
        <ImageBackground source={item.image} style={styles.image}>
          <Text style={styles.destinationName}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search destinations..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredDestinations}
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
  searchInput: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
  },
  destination: {
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
  destinationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});

export default PopularDestinationsScreen;
