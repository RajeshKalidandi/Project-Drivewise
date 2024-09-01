import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import theme from '../theme';

const SlotBooking = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const fetchSlots = async () => {
            const res = await axios.get('/api/slots');
            setSlots(res.data);
        };
        fetchSlots();
    }, []);

    const bookSlot = async (slotId) => {
        await axios.post(`/api/slots/book/${slotId}`);
        alert('Slot booked successfully!');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={slots}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.slot}>
                        <Text style={styles.text}>{item.time}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => bookSlot(item.id)}>
                            <Text style={styles.buttonText}>Book</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 16,
    },
    slot: {
        backgroundColor: theme.colors.secondary,
        padding: 16,
        marginVertical: 8,
        borderRadius: theme.borderRadius,
        borderColor: theme.colors.border,
        borderWidth: 1,
    },
    text: {
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.button,
        padding: 10,
        borderRadius: theme.borderRadius,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: theme.colors.text,
        fontWeight: 'bold',
    },
});

export default SlotBooking;