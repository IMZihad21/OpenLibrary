import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { iLibrary } from './interfaces/iBooks';

export default function App() {
  const [ books, setBooks ] = useState<iLibrary>()
  const [ searchText, setSearchText ] = useState<string>('')

  const handleSearch = async () => {
    const response = await fetch(`http://openlibrary.org/search.json?q=${searchText}`);
    const fetchedBooks = await response.json();
    setBooks(fetchedBooks);
    console.log(fetchedBooks.numFound);

  };

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Header
            elevated={true}
            centerComponent={{ text: 'Open Library', style: { color: '#fff', fontSize: 20 } }}
          />
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='Search your book'
              style={styles.searchInput}
              onChangeText={text => setSearchText(text.replace(/ /g, "+"))}
            />
            <Button
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
          <View>
            {
              !!books?.numFound ?
                <Text style={{ padding: 10 }}>Found {books?.numFound} Books!</Text> :
                <Text style={{ padding: 10, width: 200 }}>No books to Display</Text>
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  searchInput: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 5
  },
  container: {
    alignItems: "center"
  },
});
