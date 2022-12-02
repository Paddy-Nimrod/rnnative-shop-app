import { createStackNavigator } from "@react-navigation/stack";

import { Platform } from "react-native";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { HeaderButton } from "../components/UI/HeaderButton";

import Colors from "../constants/Colors";

const productsNavigator = createStackNavigator();

function productStack() {
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
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  alert("cart");
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <productsNavigator.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
    </productsNavigator.Navigator>
  );
}

export default productStack;
