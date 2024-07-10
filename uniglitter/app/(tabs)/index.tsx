import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';

// Define types for the product data
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  images: string[];
  stock_quantity: number;
  created_at: Date;
  updated_at: Date;
}

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulating fetching data from an API endpoint
      // Replace with your actual API endpoint for products
      const response = await fetch('/products');
      const data = await response.json();

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setError('Fetched data is not an array');
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Makeup Store</Text>
      <TextInput style={styles.searchBar} placeholder="Search for products..." />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button onPress={fetchProducts} title="Fetch Products" />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <ScrollView style={styles.scrollContainer}>

        <Text style={styles.sectionHeader}>Recently Viewed</Text>
        <View style={styles.bigSplashDisplay}>
          {/* Implement your big splash display here */}
        </View>
        <Text style={styles.sectionHeader}>News Section</Text>
        <View style={styles.newsSection}>
          {/* Implement your news section here */}
        </View>
        <Text style={styles.sectionHeader}>New Products</Text>
        <View style={styles.newProducts}>
          {/* Implement your new products section here */}
        </View>
        <Text style={styles.sectionHeader}>Featured Sale</Text>
        <View style={styles.featuredSale}>
          {/* Implement your featured sale section here */}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerLink}>Contact</Text>
          <Text style={styles.footerLink}>Wholesale</Text>
        </View>
      </ScrollView>
      {/* Additional Sections */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    paddingBottom: 0, // Remove bottom padding
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 20,
    flexDirection: 'column',
    padding: 10,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardContent: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  stock: {
    fontSize: 14,
    color: '#888',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#1b1e2f', // Footer background color
    paddingVertical: 10,
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Stick it to the bottom
    left: 0,
    right: 0,
  },
  footerLink: {
    color: '#007bff', // Blue color for links
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  bigSplashDisplay: {
    backgroundColor: '#f0f0f0',
    height: 150,
    borderRadius: 8,
    marginBottom: 20,
  },
  newsSection: {
    backgroundColor: '#f0f0f0',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  newProducts: {
    backgroundColor: '#f0f0f0',
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  featuredSale: {
    backgroundColor: '#f0f0f0',
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
});

