import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { Image } from 'react-native-elements';
import { iBooks } from '../interfaces/iBooks'

interface iProps {
    route: any;
}

const BookDetails: React.FC<iProps> = ({ route }) => {
    const book: iBooks = route.params.book;
    return (
        <View>
            <Image
                source={{ uri: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/300?text=No+Cover+Available' }}
                style={{ width: "100%", height: 500 }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{ alignSelf: 'stretch', paddingTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 30 }}>{book.title}</Text>
            </View>
        </View>
    )
}

export default BookDetails
