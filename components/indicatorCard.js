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
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

Icon.loadFont();



const Indicator = (props) => {
  const navigation = useNavigation()
  var caret
  console.log(props.trenPositive);
  props.trenPositive ?
    (caret = props.isNaik ?
      <Icon name="caretup" size={15} color={colors.green} /> : <Icon name="caretdown" size={15} color={colors.red} />) :
    (caret = props.isNaik ?
      <Icon name="caretup" size={15} color={colors.green} /> : <Icon name="caretdown" size={15} color={colors.red} />)

  if (props.unit) {
    var unit = <Text style={styles.unit}>
      ({props.unit})
  </Text>
  }
  var value = props.isNegative ?
    <Text style={styles.value}>-{props.value}</Text> :
    <Text style={styles.value}>{props.value}</Text>;

  const pressed = (p) => { navigation.navigate('Detail', p) };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => pressed(props.items)}>
        <View style={styles.content}>
          {caret}
          <View style={styles.valueWrapper}>
            {value}
            {unit}
          </View>
          <Text style={styles.name}>
            {props.name}
          </Text>
          <Text style={styles.release}>
            {props.release}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 5,
  },
  content: {
    padding: 20,
  },
  valueWrapper: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16,
  },
  value: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    color: colors.secondary,
  },
  unit: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.textBlack,
    lineHeight: 24,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: colors.textBlack,
    height: 50,

  },
  release: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.textBlack,
  }

})

export default Indicator;