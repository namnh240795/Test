import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'; 

const data = [
    { type: 0, title: 'All' },
    { type: 2, title: 'Steel Materials' },
    { type: 1, title: 'Machinary' },
];

export default class Filter extends React.Component {
    handleItemPress(type) {
        this.props.onPress(type);
    }
    
    renderItem(item) {
        const { type } = this.props;
        return (
            <TouchableOpacity
                key={item.type}
                onPress={this.handleItemPress.bind(this, item.type)}
                style={styles.tab}
            >
                <Text style={[styles.inActiveText, type === item.type && styles.activeText]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView 
                style={styles.tabContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {data.map(item => this.renderItem(item))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        height: Platform.OS === 'ios' ? 48 : 56,
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1,
    },
    tab: {
        height: Platform.OS === 'ios' ? 48 : 56,
        paddingLeft: 16,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    inActiveText: {
        fontWeight: '900',
        fontSize: 16,
        color: '#A9A9A9'
    },
    activeText: {
        fontWeight: '900',
        fontSize: 16,
        color: '#404247'
    },
});