import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { home, splash, addRecord } from "./screens/";

const stack = createStackNavigator();

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Splash">
          <stack.Screen
            name="Splash"
            component={splash}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Home"
            component={home}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="addRecord"
            component={addRecord}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
