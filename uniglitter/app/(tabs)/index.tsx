import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { styles } from '../../constants/styles.js';

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
        <Text style={styles.sectionHeader}>Popular Products</Text>
        {products.length > 0 ? (
          products.map((product) => (
            <View key={product._id} style={styles.card}>
              {/* <Image source={{ uri: product.images[0] }} style={styles.image} /> */}
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
