import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const tabs = [
    { title: 'General' },
    { title: 'Order' },
    { title: 'My Product' },
    { title: 'Help' },
]

export default class Tabs extends React.Component {
    state = {
        activeTab: 3,
    }

    handleTabPress(index) {
        this.setState({ activeTab: index });
    }

    renderTabs() {
        return <View style={styles.tabContainer}>
            {tabs.map((tab, index) => this.renderTab(tab, index))}
        </View>
    }

    renderTab(tab, index) {
        return (
            <TouchableOpacity 
                key={`${tab.title}${index}`}
                style={[styles.container, styles.tab]} 
                onPress={this.handleTabPress.bind(this, index)}
            >
                <Text style={[styles.inActiveText, this.state.activeTab === index && styles.activeText]}>{tab.title}</Text>
            </TouchableOpacity>
        )
    }

    renderTabContent() {
        if(this.state.activeTab === 3) {
            return (
                <View style={styles.helpContainer}>
                    <Text style={styles.title}>Help</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.row}>
                            <View style={styles.col}>
                                <Text style={styles.text}>Name</Text>
                                <Text style={styles.text}>Phone number</Text>
                                <Text style={styles.text}>Email</Text>
                                <Text style={styles.text}>Address</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.text}>Alexandar Hamilton</Text>
                                <Text style={styles.text}>+24 359 3049</Text>
                                <Text style={styles.text}>alexham@gmail.com</Text>
                                <Text style={styles.text}>#101, 2840 2 Ave SE, Calgary</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else return null;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTabs()}
                {this.renderTabContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 48 : 56,
        borderBottomColor: '#A9A9A9',
        borderBottomWidth: 1,
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center'
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
    helpContainer: {
        padding: 16
    },
    title: {
        fontWeight: '900',
        fontSize: 14,
        color: '#404247',
        marginBottom: 16,
    },
    contentContainer: {
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    text: {
        fontSize: 13,
        color: '#404247',
    }
})