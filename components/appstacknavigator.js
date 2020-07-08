import React from 'react';
import {createStackNavigatr} from 'react-navigation-stack';
import Bookdonation from '../screens/bookdonatescreen';
import Bookrequest from '../screens/bookrequestscreen';
import Recieverinfo from '../screens/recieverdetailsscreen'

export const Appstacknavigator = createStackNavigator({
    bookdonatelist : {screen:Bookdonation , navigationOptions:{headerShown:false}},
    recieverdetails : {screen:Recieverinfo , navigationOptions:{headerShown:false}},
},
{
    initialRouteName:'bookdonatelist'
})