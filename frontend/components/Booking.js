import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles';

const Booking = ({ slots, onBook }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBook = () => {
    if (selectedSlot) {
      onBook(selectedSlot);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Slots</Text>
      <FlatList
        data={slots}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slot,
              selectedSlot === item ? styles.selectedSlot : null,
            ]}
            onPress={() => setSelectedSlot(item)}
          >
            <Text style={styles.slotText}>{item.time}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={handleBook}>
        <Text style={styles.buttonText}>Book Slot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Booking;