import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
    renderInputField() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={styles.textInput}
                    underlineColorAndroid='transparent'
                    placeholder='Try search...'
                    onChangeText={this.props.onChangeText}
                />
                <View style={{ alignSelf: 'center' }}>
                    <Ionicons name='ios-search' style={styles.lookup} />
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: '600', color: '#ffffff'}}>Steel Market</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                        <View style={{ paddingRight: 8 }}>
                            <Ionicons name='ios-options' style={{ color: 'white', fontSize: 24 }} />
                        </View>
                        <View style={{ paddingRight: 8 }}>
                            <Ionicons name='ios-mail' style={{ color: 'white', fontSize: 24 }} />
                            <View style={{ position: 'absolute', top: -2, left: -8, height: 16, width: 16, borderRadius: 8, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: 'white'}}>4</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {this.renderInputField()}
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
        padding: 16
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
    },
    inputContainer: {
        marginTop: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 4,
        flexDirection: 'row',
        paddingVertical: Platform.OS === 'ios' ? 8 : 0
    },
    lookup: {
        fontSize: 20,
        color: '#404247',
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 4,
    }
})