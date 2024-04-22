import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookNowScreen = ({ navigation, route }) => {
  const { hotel, destination } = route.params;

  const handleBookNow = () => {
    // Logic for booking
    // Show success message
    alert('Booking done successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.content}>
        <Text style={styles.heading}>Booking Details</Text>
        <Text style={styles.text}>Destination: {destination ? destination.name : 'Unknown'}</Text>
        <Text style={styles.text}>Hotel: {hotel.name}</Text>
        <Text style={styles.text}>Description: {hotel.description}</Text>
        <Text style={styles.text}>Price: ${hotel.price} per night</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Book Now"
            onPress={handleBookNow}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  content: {
    zIndex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default BookNowScreen;
