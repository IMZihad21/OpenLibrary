import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Books } from './components/Books';
import { iLibrary } from './interfaces/iBooks';

export default function App() {
  const [ books, setBooks ] = useState<iLibrary>()
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ searchText, setSearchText ] = useState<string>('')

  const handleSearch = async () => {
    setLoading(true);
    const response = await fetch(`http://openlibrary.org/search.json?q=${searchText}`);
    const fetchedBooks = await response.json();
    setBooks(fetchedBooks);
    setLoading(false);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Header
          elevated={true}
          centerComponent={{ text: 'Open Library', style: { color: '#fff', fontSize: 20, } }}
        />
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search your book'
            style={styles.searchInput}
            onChangeText={text => setSearchText(text.replace(/ /g, "+"))}
            onSubmitEditing={e => handleSearch()}
          />
          <Button
            containerStyle={{ width: 100 }}
            loading={loading}
            onPress={handleSearch}
            icon={
              <Icon
                name="search"
                size={15}
                color="white"
              />
            }
            title=" Search"
          />
        </View>
        <ScrollView contentContainerStyle={{ width: "100%", alignItems: "center", paddingTop: 30 }}>
          {
            books?.numFound ?
              books.docs.map(book => <Books key={Math.random()} book={book} />) :
              <Text style={{ width: "100%", paddingHorizontal: 50 }}>No books Found!</Text>
          }
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  searchInput: {
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 5
  },
  container: {
    alignItems: "center",
    width: "100%"
  },
});
