import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const SlotBooking = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Book a Slot</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

export default SlotBooking;