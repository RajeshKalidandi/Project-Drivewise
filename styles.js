// Define DriveWise color palette
const colors = {
  primary: '#000000', // Black
  secondary: '#FFFFFF', // White
  accent: '#1FBAD6', // Blue accent
  background: '#F5F5F5', // Light gray background
  textPrimary: '#000000', // Black text
  textSecondary: '#7E7E7E', // Gray text
};

// Example of applying these colors in a StyleSheet
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // ... other styles
});

export default styles;