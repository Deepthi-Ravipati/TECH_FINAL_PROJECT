import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
        <Text style={styles.logoText}>JOURNEYGENIUS</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              title="Explore"
              onPress={() => navigation.navigate('Popular Destinations')}
              color="white"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Courier New', // Replace 'YourCustomFont' with the name of your custom font
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonBox: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
