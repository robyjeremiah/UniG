import { Text, View, Button, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

// Define types for the movie data
interface Movie {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: string;
  directors: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
    };
    production?: string;
    lastUpdated: string;
  };
}

export default function Index() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/hello'); // Replace with your actual API endpoint for movies
      let data = await response.json();
  
      console.log('Fetched data:', data);
  
// Check if the fetched data is an array
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      if (Array.isArray(data)) {
        setMovies(data); // Update state with fetched data
      } else {
        console.error('Unexpected data format:', data);
        setError('Fetched data is not in the expected format'); // Handle unexpected data structure
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Movie Database</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button onPress={fetchMovies} title="Fetch Movies" />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionHeader}>Popular Movies</Text>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <View key={movie._id} style={styles.card}>
              <Image source={{ uri: movie.poster }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.plot}>{movie.plot}</Text>
                <Text style={styles.details}>Genres: {movie.genres.join(', ')}</Text>
                <Text style={styles.details}>Rating: {movie.imdb.rating}</Text>
                <Text style={styles.details}>Runtime: {movie.runtime} minutes</Text>
                <Text style={styles.details}>Released: {new Date(movie.released).toDateString()}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No movies available</Text>
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
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  plot: {
    fontSize: 14,
    marginBottom: 5,
  },
  details: {
    fontSize: 12,
    color: '#888',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});
