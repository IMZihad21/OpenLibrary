import React, { useState } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { iLibrary } from '../interfaces/iBooks'
import { Books } from './Books'

interface iProps {
    navigation: any
}

const Home: React.FC<iProps> = ({ navigation }) => {
    const [ books, setBooks ] = useState<iLibrary>();
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ searchText, setSearchText ] = useState<string>('');

    const handleSearch = async () => {
        setBooks(undefined);
        setLoading(true);
        const response = await fetch(`http://openlibrary.org/search.json?q=${searchText}`);
        const fetchedBooks = await response.json();
        setBooks(fetchedBooks);
        setLoading(false);
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", marginTop: books?.numFound ? 10 : 50 }}>
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
                {
                    books?.numFound ?
                        <FlatList
                            style={styles.resultContainer}
                            data={books.docs}
                            renderItem={({ item }) => <Books navigation={navigation} book={item} />}
                            keyExtractor={(item, index) => index.toString()}
                        /> :
                        <Text style={{ marginTop: 50, fontWeight: "bold", fontSize: 20, alignSelf: "center" }}>Type and search for books you are looking for!</Text>
                }
            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    searchInput: {
        width: 200,
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginHorizontal: 5
    },
    resultContainer: {
        marginBottom: 50,
        marginTop: 10
    },
    container: {
        alignItems: "center",
        width: "100%"
    },
});

export default Home;