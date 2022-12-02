import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import ShopNavigator from "./navigation/ShopNavigator";
import { fetchFonts, store } from "./App";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}
