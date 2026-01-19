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


Icon.loadFont();
const screenWidth = Dimensions.get('window').width;



const Detail = ({ route, navigation }) => {

    const props = route.params;
    const release = props.values[props.values.length - 1].tahun;
    var value = props.values[props.values.length - 1].isNegative ?
        <Text style={styles.value}>-{props.values[props.values.length - 1].value}</Text> :
        <Text style={styles.value}>{props.values[props.values.length - 1].value}</Text>;

    var chartValue = [];
    var chartLabel = [];
    props.values.map((item) =>
        item.isNegative ?
            chartValue.push(0 - item.value) :
            chartValue.push(item.value)
    );
    props.values.map((item) =>
        chartLabel.push(item.tahun)

    );
    const chartData = {
        labels: chartLabel,
        datasets: [
            {
                data: chartValue,
                chartConfig: {
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: '#08130D',
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false, // optional
                },
            },
        ],

    };
    const width = Dimensions.get('window').width / 100 * 90;

    if (props.source) {
        var link =
            <TouchableOpacity onPress={() => Linking.openURL(props.source)}>
                <Text style={styles.src}>selengkapnya <Icon name="right" size={12} color={colors.textBlack} /></Text>
            </TouchableOpacity>;
    }
    if (props.unit) {
        var unit = <Text style={styles.unit}>({props.unit})</Text>;
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.chartWraper}>
                    <LineChart
                        data={{
                            labels: chartLabel,
                            datasets: [
                                {
                                    data: chartValue,
                                },
                            ],
                        }}
                        width={width} // from react-native
                        height={220}
                        // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: colors.primary,
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(46, 51, 99, ${opacity})`,
                            labelColor: (opacity = 1) => colors.textBlack,

                            propsForDots: {
                                r: '4',
                                strokeWidth: '5',
                                stroke: colors.primary,
                            },
                        }}
                    />
                </View>
                <View style={styles.main}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.sub}>Kabupaten Klaten</Text>
                    <Text style={styles.sub}>{release}</Text>
                    <View style={styles.valueWrapper}>
                        {value}
                        {unit}
                    </View>
                    <View style={styles.h2wrap}>
                        <Text style={styles.h2}>Keterangan </Text>
                        {link}
                    </View>
                    <Text style={styles.description}>{props.description}</Text>
                </View >
                <View style={styles.h2wrap, styles.main}>
                    <Text style={styles.h2}>Publikasi</Text>
                </View>
                <Publications style={{ position: 'absolute' }} keywords={props.keyword} />
                <View style={styles.h2wrap, styles.main}>
                    <Text style={styles.h2}>infografis</Text>
                </View>
                <Infographics style={{ position: 'absolute' }} keywords={props.keyword} />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: colors.background,
    },
    chartWraper: {
        alignSelf: 'center',
        width: '90%',
        elevation: 4,
        backgroundColor: '#ffffff',
        marginTop: 20,
        padding: 8,
        paddingTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    main: {
        padding: 20,

    },
    title: {
        color: colors.textBlack,
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
    },
    sub: {
        fontFamily: 'Montserrat-Regular',
    },
    h2: {
        fontFamily: 'Montserrat-Bold',
    },
    h2wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    valueWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    value: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 32,
        color: colors.secondary,
        marginTop: 20,
        marginBottom: 20,
    },
    unit: {
        fontFamily: 'Montserrat-Regular',
        color: colors.textBlack,
        fontSize: 14,
        lineHeight: 68,
        marginLeft: 20,
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        color: colors.textBlack,
        lineHeight: 24,
        marginTop: 20,
        fontSize: 14,

    },
    src: {
        fontFamily: 'Montserrat-Light',
        color: colors.primary,
        fontSize: 12,
    },

});

export default Detail;
