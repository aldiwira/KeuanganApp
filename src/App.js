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
      setisFirst(false);
    }, 1500);
  }, []);
  const [isFirst, setisFirst] = useState(true);

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
          {isFirst ? (
            <stack.Screen
              name="Splash"
              component={splash}
              options={{ headerShown: false }}
            />
          ) : null}
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
