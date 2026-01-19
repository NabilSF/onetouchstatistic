import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from './StackNavigator';
import type { Node } from 'react';
import {View, Text} from 'react-native';

//category
import {Agama} from '../category/Agama';
import {Ekonomi} from '../category/Ekonomi';
import {IPM} from '../category/IPM';
import {Kependudukan} from '../category/Kependudukan';
import {Ketenagakerjaan} from '../category/Ketenagakerjaan';
import {Peternakan} from '../category/Peternakan';
import {Kesehatan} from '../category/Kesehatan';
import {Pemerintahan} from '../category/Pemerintahan';
import {Kemiskinan} from '../category/Kemiskinan';
import {Pendidikan} from '../category/Pendidikan';
import {Gender} from '../category/Gender';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Agama" component={Agama} />
            <Drawer.Screen name="Ekonomi" component={Ekonomi} />
            <Drawer.Screen name="Gender" component={Gender} />
            <Drawer.Screen name="IPM" component={IPM} />
            <Drawer.Screen name="Kemiskinan" component={Kemiskinan} />
            <Drawer.Screen name="Kependudukan" component={Kependudukan} />
            <Drawer.Screen name="Kesehatan" component={Kesehatan} />
            <Drawer.Screen name="Ketenagakerjaan" component={Ketenagakerjaan} />
            <Drawer.Screen name="Pemerintahan" component={Pemerintahan} />
            <Drawer.Screen name="Peternakan" component={Peternakan} />
            <Drawer.Screen name="Pendidikan" component={Pendidikan} />
        </Drawer.Navigator>
    );
};

export {DrawerNavigator};
