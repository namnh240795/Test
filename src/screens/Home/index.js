import React from "react";
import { Text, View, FlatList, StyleSheet, Platform, Dimensions, Image } from "react-native";
import { Card } from 'native-base';
import { createBottomTabNavigator } from "react-navigation";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SwiperImage from "./components/Swiper";

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
            <Card style={styles.container}>
                <Image style={styles.image} source={item.image} resizeMode='contain' resizeMethod='scale'/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.provider}>{item.provider}</Text>
                    <Text style={styles.post}>({item.postNumber} Posts) <Text style={styles.new}>{item.newNumber} news</Text></Text>
                </View>
            </Card>
        )
    }

  render() {
    return (
      <View style={styles.container}>
        <SwiperImage />
        <Header 
            onChangeText={value => {
                const keyword = value;
                const { type } = this.state;
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
        marginTop: 8,
        paddingHorizontal: 8,
        fontWeight: '900',
        fontSize: 14,
        color: '#404247'
    },
    new: {
        paddingHorizontal: 8,
        fontSize: 14,
        color: 'red'
    },
    provider: {
        paddingHorizontal: 8,
        marginTop: 8,
        fontSize: 14,
        color: '#404247'
    },
    post: {
        paddingHorizontal: 8,
        marginTop: 8,
        fontSize: 14,
        color: '#404247'
    }

});

export default Home;


