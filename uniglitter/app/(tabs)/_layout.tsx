import React from 'react';
import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

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


const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeIcon />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: () => <CategoriesIcon />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: () => <AccountIcon />,
          headerShown: false
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
});

export default TabsLayout;
