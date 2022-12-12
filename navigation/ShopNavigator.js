import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { Platform } from "react-native";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrderScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/UI/HeaderButton";

import Colors from "../constants/Colors";

const productsNavigator = createStackNavigator();
const Drawer = createDrawerNavigator();

const OrdersNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Orders" component={OrdersScreen} />
    </Drawer.Navigator>
  );
};

const productStack = () => {
  return (
    <productsNavigator.Navigator
      screenOptions={{
        headerStyle:
          Platform.OS === "android" ? { backgroundColor: Colors.primary } : "",
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleStyle: { fontFamily: "open-sans-bold" },
        headerBackTitleStyle: { fontFamily: "open-sans" },
      }}
    >
      <productsNavigator.Screen
        name="All Products"
        component={ProductOverviewScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigation.navigate("cartScreen");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <productsNavigator.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <productsNavigator.Screen name="cartScreen" component={CartScreen} />
    </productsNavigator.Navigator>
  );
};

export default productStack;
