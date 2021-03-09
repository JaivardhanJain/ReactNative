import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,
        Alert, Modal, ScrollView, KeyboardAvoidingView}
        from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader.js';

export default class SettingScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Setting Screen</Text>
            </View>
        )
    }
}