import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { iBooks } from '../interfaces/iBooks'

interface iProps {
    book: iBooks;
    navigation: any
}

export const Books: React.FC<iProps> = ({ book, navigation }) => {
    return (
        <Card wrapperStyle={{ minWidth: "100%" }}>
            <Card.Title>{book.title}</Card.Title>
            <Card.Divider />
            <Card.Image
                placeholderStyle={{ minHeight: 300 }}
                source={{
                    uri: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/300?text=No+Cover+Available'
                }}>
            </Card.Image>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                title='More Details'
                onPress={() => {
                    navigation.navigate('BookDetails', {
                        name: book.title,
                        book
                    });
                }}
            />
        </Card>
    )
}
