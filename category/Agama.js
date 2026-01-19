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
import Indicator from '../components/indicatorCard';
import { getIndicators } from '../assets/api/Indicator'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Agama extends Component {
    constructor() {
        super();
        this.state = {
            indicators: null,
        };
    }
    onRecieved = (list) => {
        this.holder = list
        this.filter('Agama') 
    }
    componentDidMount() {
        getIndicators(this.onRecieved)

    }
    filter(x) {
        var data = this.holder.filter(item => {
            const itemData = `${item.category.toUpperCase()}`;
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
                            <Text style={styles.h2}>
                                Agama
                            </Text>

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
                                                category={ind.category}
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
    titlespan: {
        letterSpacing: 1,
        lineHeight: 20,
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

export  {Agama};