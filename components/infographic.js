/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableNativeFeedback,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state

    return () => setValue(1); // update the state to force render
}

const Infographic = (props) => {
    const [items, setItems] = useState([]);
    let forceupdate = useForceUpdate()

    useEffect(() => {
        props.keywords !== null && props.keywords.forEach(keyword => {
            fetch("https://webapi.bps.go.id/v1/api/list/model/infographic/domain/3310/keyword/" + keyword + "/key/48e55045ac2b018963f42ddededde6fd/")
                .then(res => res.json())
                .then(
                    (result) => {
                        result.data.length !== 0 &&
                            result.data[1].forEach(element => {
                                if (items.length !== 0) {
                                    var f = items.filter(x => { x.inf_id == element.inf_id })
                                    f.length == 0 && items.push(element)
                                } else {
                                    items.push(element)
                                }
                                // console.log(items);
                                setItems(items)
                            });
                    });

        });
        setInterval(forceupdate, 1000)
        // setItems(itm)
    })

    const navigation = useNavigation()
    const pressed = (img) => { navigation.navigate('IView', img) };
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.wraper}>
                    {items && items.map((item) =>
                        <TouchableOpacity key={item.inf_id} onPress={() => pressed(item.img)}>
                            <View style={styles.holder}>
                                < Image style={styles.img}
                                    source={{ uri: item.img }}></Image>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    img: {
        borderRadius: 10,
        width: 300,
        height: 300,
        resizeMode: 'cover',
    },
    holder: {
        width: 300,
        margin: 10,

    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
        color: colors.textBlack,


    },
    wraper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 20,
    }

})

export default Infographic;