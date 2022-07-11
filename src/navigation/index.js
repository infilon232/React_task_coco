import React from "react";
import { LogBox, StyleSheet, Text } from "react-native";
import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./route";
import { Colors, Constants } from "../config/appConstants";
import { SafeAreaView } from "react-native-safe-area-context";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
LogBox.ignoreLogs(["Remote debugger"]);
const s = StyleSheet.create({
  rootSaf: { backgroundColor: Colors.black, flex: 1 }
});
const Stack = createNativeStackNavigator();
const App = () => {
  const navigationRef = createNavigationContainerRef();
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={s.rootSaf}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: Constants.animation_fade
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
