import { Text, View, Button, Image, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

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

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/products'); // Replace with your actual API endpoint for products
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

  useEffect(() => {
    console.log('useEffect called')
    fetchProducts();
  }, []);

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
        <Text style={styles.sectionHeader}>Popular Products</Text>
        {products.length > 0 ? (
          products.map((product) => (
            <View key={product._id} style={styles.card}>
              <Image source={{ uri: product.images[0] }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
                <Text style={styles.stock}>Stock: {product.stock_quantity}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No products available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
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
});
