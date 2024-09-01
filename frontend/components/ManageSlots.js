import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles';

const ManageSlots = ({ slots, onAddSlot, onRemoveSlot }) => {
  const [newSlot, setNewSlot] = useState('');

  const handleAddSlot = () => {
    if (newSlot) {
      onAddSlot(newSlot);
      setNewSlot('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Slots</Text>
      <TextInput
        style={styles.input}
        placeholder="New Slot Time"
        value={newSlot}
        onChangeText={setNewSlot}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddSlot}>
        <Text style={styles.buttonText}>Add Slot</Text>
      </TouchableOpacity>
      <FlatList
        data={slots}
        renderItem={({ item }) => (
          <View style={styles.slotContainer}>
            <Text style={styles.slotText}>{item.time}</Text>
            <TouchableOpacity onPress={() => onRemoveSlot(item.id)}>
              <Text style={styles.removeSlot}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ManageSlots;