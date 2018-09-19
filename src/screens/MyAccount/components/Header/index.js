import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainers}>
                    <Ionicons name='ios-settings' style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.wrapperText}>
                        <Text style={styles.accountText}>Account</Text>
                    </View>
                    <View style={styles.active}>
                        <View style={styles.mrAlexContainer}>
                            <Text style={styles.hiText}>Hi, Mr Alex</Text>
                        </View>
                        <View style={styles.activeTextContainer}>
                            <Text style={styles.activeText}>Active</Text>
                            <FontAwesome name='question-circle' style={styles.iconInfo} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {        
        width: '100%',
        backgroundColor: '#404247',
        paddingTop: Platform.OS === 'ios' ? 20 : 28,
        paddingBottom: 16,
    },
    icon: {
        fontSize: 20,
        color: 'white'
    },
    iconContainers: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    textContainer: {
        paddingHorizontal: 16,
    },
    accountText: {
        fontSize: 24,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    hiText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    activeText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    active: {
        flexDirection: 'row',
    },
    mrAlexContainer: {
        flex: 1,
    },
    activeTextContainer: {
        alignSelf: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: '#E82E33'
    },
    iconInfo: {
        color: '#FFFFFF',
        position: 'absolute',
        top: 4,
        left: 4
    }
})