/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import type { Node } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();
//components
import Indicator from './indicatorCard';
import { getIndicators } from '../assets/api/Indicator'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            indicators: null,
        };
    }
    onRecieved = (list) => {
        this.setState({ indicators: list })
        this.holder = list
    }
    componentDidMount() {
        getIndicators(this.onRecieved)

    }
    filter(x) {
        var data = this.holder.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = x.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({ indicators: data });
        // console.log(this.holder);
    }

    render() {
        var indicators = <Text>Loading..</Text>

        return (


            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/lurik.jpg')} resizeMode="cover" style={styles.imagebck}>
                    <ScrollView>
                    <View style={styles.header}>
                        { <Image source={require('../assets/images/LurikLogo.png')} /> }
                            <Text style={styles.subtitle}>
                                Layanan Untuk Ragam Informasi Klaten
                            </Text>
                        </View>
                        <View style={styles.main}>
                            <Text style={styles.h2}>
                                Indikator Statistik Kabupaten Klaten
                            </Text>
                            <View style={styles.search}>
                                <Icon name="search1" size={20} color={colors.textBlack} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => this.filter(text)}
                                    placeholder="cari angka statistik..."
                                />
                            </View>
                            <View style={{ justifyContent: 'center', width: '100%', flexDirection: 'row', }}>
                                <View style={styles.indContainer}>
                                    {this.state.indicators ?
                                        this.state.indicators.map((ind) =>
                                            <Indicator
                                                items={ind}
                                                key={ind.id}
                                                keyword={ind.keyword}
                                                isNaik={ind.isNaik}
                                                trenPositive={ind.trenPositive}
                                                isNegative={ind.values[ind.values.length - 1].isNegative}
                                                name={ind.name}
                                                value={ind.values[ind.values.length - 1].value}
                                                release={ind.values[ind.values.length - 1].tahun}
                                                unit={ind.unit}
                                            ></Indicator>
                                        ) :
                                        <Text>Loading..</Text>}
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        )
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: '100%',
    },
    imagebck: {
        flex: 1,
        width: '100%',
    },
   

    title: {
        fontSize: 24,
        color: '#F9F7FF',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontFamily: 'Montserrat-Bold',
    },
    titlespan: {
        letterSpacing: 1,
        lineHeight: 20,
    },
    search: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.textBlack,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    input: {
        padding: 10,
        height: 40,
    },
    header: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,

    },
    subtitle: {
        fontSize: 18,
        paddingTop: 18,
        color: colors.secondary,
    },
    h2: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textBlack,
        textAlign: 'center',
        margin: 16,

    },
    main: {
        width: '100%',
        minHeight: 500,
        flex: 4,
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor: colors.background,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    indContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});

export default Home;