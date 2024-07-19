import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles.js';

interface AccountScreenProps { }

const AccountScreen: React.FC<AccountScreenProps> = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false); // State for authentication status

  // Function to render different content based on authentication status
  const renderContent = () => {
    if (authenticated) {
      return (
        <><Text style={styles.header}>Welcome to Makeup Store</Text>
        <ScrollView contentContainerStyle={styles.loadingContainer}>
          {/* Example section for account details */}
          <View style={styles.card}>
            {/* Replace with actual user account information */}
            <Text style={styles.title}>User Name</Text>
            <Text style={styles.description}>user.email@example.com</Text>
            {/* Add more account details here */}
          </View>

          {/* Example section for orders */}
          <TouchableOpacity style={styles.card} onPress={() => { } }>
            <Text style={styles.title}>Orders</Text>
            <Text style={styles.description}>View your order history</Text>
          </TouchableOpacity>

          {/* Example section for settings */}
          <TouchableOpacity style={styles.card} onPress={() => { } }>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.description}>Manage your account settings</Text>
          </TouchableOpacity>

          {/* Example section for logout */}
          <TouchableOpacity style={styles.card} onPress={() => { } }>
            <Text style={styles.title}>Logout</Text>
            <Text style={styles.description}>Sign out from your account</Text>
          </TouchableOpacity>
          {/*Footer with link to the shopping cart */}

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => { } }>
              <Text style={styles.footerLink}>View Shopping Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView></>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style = {styles.header}>Shopping Cart</Text>
          {/* Optionally, add a login button or link */}
          <View style={styles.footer}>
          <Text style={styles.footerLink}>Please login to view your account. or Create account</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Render content based on authentication status */}
      {renderContent()}
      
      {/* <Text style={styles.header}>Shopping Cart</Text> */}



    </View>
  );
};

export default AccountScreen;
