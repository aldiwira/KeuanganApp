import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, Splash } from "./screens/";

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash'>
        <stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen name='Home' component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
