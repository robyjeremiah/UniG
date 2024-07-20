import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles.js';
import { useAuthStore } from '../../stores/userStore';
import { User } from '../../scripts/interfaces/interfaces'

const cartScreen: React.FC = () => {
  const { isAuthenticated, isGuest, user, login, } = useAuthStore();

  const handleLogin = () => {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: ''
    }; // replace with actual user data
    login(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      {/* Optionally, add a login button or link */}
      <View style={styles.footer}>
        <Text style={styles.footerLink}>Please login to view your account. or Create account</Text>
      </View>
    </View>
  );
};

export default cartScreen;
