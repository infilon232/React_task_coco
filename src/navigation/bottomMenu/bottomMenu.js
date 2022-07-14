import React from "react";
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import TabBar from "./tabBar";
import {
    Home,
    Cart,
    Menu,
    Account,
} from "../route";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";
import { Colors, Constants, ImageView } from "../../config/appConstants";

export const BottomMenu = () => {
    const Tab = createBottomTabNavigator();
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                animation: Constants.animation_fade,
            }} tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
                <Tab.Screen initialParams={{ icon: ImageView.tab1 }} name="Home" component={Home} />
                <Tab.Screen initialParams={{ icon: ImageView.tab2 }} name="Cart" component={Cart} />
                <Tab.Screen initialParams={{ icon: ImageView.tab3 }} name="Menu" component={Menu} />
                <Tab.Screen initialParams={{ icon: ImageView.tab4 }} name="Account" component={Account} />
            </Tab.Navigator>
            {useSafeArea().bottom > 0 && (
                <View
                    style={{
                        height: useSafeArea().bottom - 5,
                        backgroundColor: Colors.primary
                    }}
                />
            )}
        </View>
    );
};

// const Tab = createBottomTabNavigator();

// const MyTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName='HomeScreen2'
//       screenOptions={{
//         tabBarActiveTintColor: '#2C64E3',
//       }}
//     >
//       <Tab.Screen
//         name='HomeScreen2'
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={ImageView.test} style={[c.img24,{tintColor:color}]} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name='Shop'
//         component={Shop}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Shop',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={ImageView.cart} style={[c.img24,{tintColor:color}]} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name='Repay'
//         component={Repay}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Repay',
//           tabBarIcon: ({ color, size }) => (
//             <Image source={ImageView.repay} style={[c.img24,{tintColor:color}]} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };