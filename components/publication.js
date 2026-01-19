/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import { useEffect, useState } from 'react'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(1); // update the state to force render
}

const Publication = (props) => {
    const [items, setItems] = useState([]);
    let forceupdate = useForceUpdate()

    useEffect(() => {
        props.keywords !== null && props.keywords.forEach(keyword => {
            fetch('https://webapi.bps.go.id/v1/api/list/model/publication/domain/3310/keyword/' + keyword + '/key/48e55045ac2b018963f42ddededde6fd/')
                .then(res => res.json())
                .then(
                    (result) => {
                        result.data.length !== 0 &&
                            result.data[1].forEach(element => {
                                if (items.length !== 0) {

                                    var f = items.filter(x => x.pub_id === element.pub_id)
                                    f.length === 0 && items.push(element)
                                    // console.log(f);
                                } else {
                                    items.push(element)
                                }
                                setItems(items)
                            });
                    });

        });
        setInterval(forceupdate, 1000)
        // setItems(itm)
    })

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.wraper}>
                    {items && items.map((item) =>
                        <View key={item.pub_id} style={styles.holder}>
                            < Image style={styles.img}
                                source={{ uri: item.cover }}></Image>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
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
        width: 150,
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        paddingTop: 10,
        paddingLeft: 10,
        lineHeight: 16,
        color: colors.textBlack,
    },
    holder: {
        width: 150,
        margin: 10,

    },
    wraper: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 20,
    }

})

export default Publication;