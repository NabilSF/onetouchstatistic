/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    Linking,
    Modal,
    Image,
    ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

//components
import Infographics from './infographic';
import Publications from './publication';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


Icon.loadFont();
const screenWidth = Dimensions.get('window').width;



const IView = ({ route, navigation }) => {

    console.log(route.params);
    return (
        <View style={styles.popcontainer}>
            <Image source={{ uri: route.params }} style={styles.popImg}></Image>
        </View >
    )
}

const styles = StyleSheet.create({
    popcontainer: {
        backgroundColor: 'white',
        height: '100%',

    },
    popImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
})
export default IView;
