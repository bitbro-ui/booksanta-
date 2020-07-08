import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu'
import Settings from '../screens/settingscreen'
import Mydonationscreen from '../screens/mydonationscreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    mydonations:{screen:Mydonationscreen},
    Setting:{
        screen:Settings
    },
    },
    {contentComponent:CustomSideBarMenu},
    {initialRouteName:'Home'})