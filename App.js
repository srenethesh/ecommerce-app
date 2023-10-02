  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigationbar from "./Navigationbar";
import Productdetail1 from "./Productdetail1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Navigationbar" 
        component={Navigationbar} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Productdetail1" 
        component={Productdetail1} 
        options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



