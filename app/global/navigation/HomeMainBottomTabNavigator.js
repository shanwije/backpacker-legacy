import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import chatView from '../../modules/Chat/src/views/ChatView';
import Profile from '../../modules/Profile/src/views';
import homeView from '../../modules/Home/src/views';
import initialProfileDetails from '../../modules/InitialProfileDetails/src/views/GetUserNameView';

const Tab = createBottomTabNavigator();

const HomeMainBottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="initialProfileView"
                component={initialProfileDetails}
            />
            <Tab.Screen name="home" component={homeView} />
            <Tab.Screen name="chat" component={chatView} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default HomeMainBottomTabNavigator;
