import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//importing files
import HomeScreen from "./HomeScreen";
import MyCartScreen from "./MyCartScreen";
import ProfileScreen from "./ProfileScreen";

//Screen names
const homeName = "Home";
const myCartName = "MyCart";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function Navigationbar() {
  return (
    
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === myCartName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        ScreenOptions={{
          tabBaractiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarlabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarstyle: { display: "flex"},
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={myCartName} component={MyCartScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    
  );
}

export default Navigationbar;

