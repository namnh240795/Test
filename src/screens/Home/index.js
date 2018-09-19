import React from "react";
import { Text, View, FlatList, StyleSheet, Platform, Dimensions, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Header from "./components/Header";
import Filter from "./components/Filter";
const fakeImage = require('../../../assets/maxresdefault.jpg');

const data = [
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/Manga/NarutoKun/SakuraChan/SasukeKun/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/Manga/NarutoKun/SakuraChan/SasukeKun/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/Manga/NarutoKun/SakuraChan/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 2, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/Manga/NarutoKun/SasukeKun/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 0, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/Manga/SakuraChan/SasukeKun/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 0, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 2, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Frankie/NarutoKun/SakuraChan/SasukeKun/Obito/Kakashi', postNumber: 1, newNumber: 1, type: 2, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 0, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
    { image: fakeImage, title: 'Cranes', postNumber: 1, newNumber: 1, type: 1, provider: 'Provider' },
]


class Home extends React.Component {
    state = {
        type: 0,
        data,
        keyword: null
    }

    renderItem({ item, index }) {
        return (
            <View style={styles.card}>
                <View>
                    <Image style={styles.image} source={item.image} resizeMode='contain' resizeMethod='scale'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.provider}>{item.provider}</Text>
                        <Text>({item.postNumber} Posts) <Text style={styles.new}>{item.newNumber} news</Text></Text>
                    </View>
                </View>
            </View>
        )
    }

  render() {
    return (
      <View style={styles.container}>
        <Header 
            onChangeText={value => {
                console.log('value', value)
            }}
        />
        <Filter
            type={this.state.type}
            onPress={type => {
                const { keyword } = this.state;
                const newData = data.filter(d => {
                    if(!keyword) {
                        if(type === 0) {
                            return true;
                        } else {
                            return d.type === type;
                        }
                    } else {
                        return d.type === type && d.title.includes(keyword);
                    }
                });
                this.setState({ type, data: newData });
            }}
        />
        <FlatList
            numColumns={2}
            data={this.state.data}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => `${item.title}${index}`}
            showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: deviceWidth / 4,
        width: '100%',
        backgroundColor: '#FEFEFE',
    },
    card: {
        marginTop: 8,
        flex: 1,
        elevation: 1,
        shadowOffset:{  width: 4,  height: 4 },
        shadowColor: '#404247',
        paddingHorizontal: 8,
        shadowOpacity: 0.2,
    },
    textContainer: {
        paddingVertical: 8,
    },
    title: {
        fontWeight: '900',
        fontSize: 14,
        color: '#404247'
    },
    new: {
        fontSize: 14,
        color: 'red'
    },
    provider: {
        marginTop: 8,
        fontSize: 14,
        color: '#404247'
    }

});

export default Home;


