import React, { useEffect, useState } from "react";
import { Root } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./config/colors";
import { home, splash, addRecord } from "./screens/";

const stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setisFirst(true);
    }, 1100);
  }, []);
  const [isFirst, setisFirst] = useState(false);

  return (
    <Root>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.colorBlueNTSC,
              elevation: 0,
            },
            headerTitleStyle: {
              color: colors.colorWhite,
            },
            headerTintColor: colors.colorWhite,
          }}
        >
          <stack.Screen
            name="Splash"
            component={splash}
            options={{ headerShown: false }}
          />
          <stack.Screen name="Home" component={home} />
          <stack.Screen
            name="addRecord"
            component={addRecord}
            options={{ title: "Tambahkan catatan" }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
