import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { styles } from '../../constants/styles.js';
import { ObjectId } from 'mongodb';
import { Category } from '@/scripts/interfaces/interfaces.js';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/category');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.categoryScreenContainer}>
      <Text style={styles.header}>Categories</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {categories.length > 0 ? (
        categories.map((category) => (
          <TouchableOpacity key={category._id.toString()} style={styles.categoryContainer}>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>{category.description}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No categories available</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={fetchCategories} title="Refresh Categories" />
      </View>
    </ScrollView>
  );
};

export default CategoriesScreen;
