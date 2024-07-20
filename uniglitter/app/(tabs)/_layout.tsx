import React from 'react';
import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
import { useAuthStore } from '../../stores/userStore';

// Define your tab icons
const HomeIcon = () => (
  <Image source={require('../../assets/images/home_icon.jpeg')} style={styles.tabIcon} />
);
const CategoriesIcon = () => (
  <Image source={require('../../assets/images/categories_icon.jpeg')} style={styles.tabIcon} />
);
const AccountIcon = () => (
  <Image source={require('../../assets/images/account_icon.jpeg')} style={styles.tabIcon} />
);

const TabsLayout: React.FC = () => {
  const { isAuthenticated, isGuest } = useAuthStore();

  console.log("isAuthenticated:", isAuthenticated);
  console.log("isGuest:", isGuest);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: CategoriesIcon,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          //tabBarIcon: AccountIcon, // Consider using a cart icon here instead
          headerShown: false,
        }}
      />
      {isAuthenticated ? (
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: AccountIcon,
            headerShown: false,
          }}
        />
      ) : null }

    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default TabsLayout;
