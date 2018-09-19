import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'; 

const data = [
    { type: 0, title: 'All' },
    { type: 1, title: 'Machinary' },
    { type: 2, title: 'Steel' },  
];

export default class Filter extends React.Component {
    handleItemPress(type) {
        this.props.onPress(type);
    }
    
    renderItem(item) {
        const { type } = this.props;
        return (
            <TouchableOpacity
                onPress={this.handleItemPress.bind(this, item.type)}
                style={styles.tab}
            >
                <Text style={this.props.type === item.type ? styles.activeText : styles.inActiveText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View 
                style={styles.tabContainer}
            >
                {data.map(item => this.renderItem(item))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
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
        color: '#404247',
        fontWeight: '900',
        fontSize: 16,
    },
});