import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "./screens/";

const stack = createStackNavigator();

export default () => {
  return (
    <Root>
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home'>
          <stack.Screen name='Home' component={Home} />
        </stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};
