import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    width: '99%',
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
    paddingVertical: '2%',
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Stick it to the bottom
    left: 0,
    right: 0,
  },
  footerLink: {
    color: '#007bff', // Blue color for links
    textDecorationLine: 'underline',
    fontSize: 16,
    paddingBottom: "2.5%"
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryScreenContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: '5%',
    paddingTop: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryDescription: {
    marginTop: 5,
    color: '#555',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
