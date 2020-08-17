import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { Platform } from 'react-native';
import Home from './pages/Home';
import Other from './pages/Other';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from './libs/graphql-client';

const showHeader = Platform.OS !== 'web'

// Path mapping for routing.
const linking = {
    prefixes: [],
    config: {
        screens: {
            Home: 'home',
            Other: 'other',
        },
    },
};


const Stack = createStackNavigator()

const Routes = () => {
    return <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: showHeader }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
    </NavigationContainer>;
}

export default function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ApolloProvider client={graphqlClient}>
                <Routes />
            </ApolloProvider>
        </ApplicationProvider>
    )
}



