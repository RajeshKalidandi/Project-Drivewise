import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SlotBooking from './components/SlotBooking';
import { SafeAreaView, StatusBar } from 'react-native';
import theme from './theme';

const App = () => {
    return (
        <ThemeProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <StatusBar barStyle="light-content" />
                <SlotBooking />
            </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;