import "react-native-gesture-handler";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACesy9te8hs1xHzTisnFY-GmYbLCR38bg",
  authDomain: "react-hook-dfacb.firebaseapp.com",
  databaseURL: "https://react-hook-dfacb.firebaseio.com",
  projectId: "react-hook-dfacb",
  storageBucket: "react-hook-dfacb.appspot.com",
  messagingSenderId: "968998992973",
  appId: "1:968998992973:web:bd8151de5970fa2ad8f004",
  measurementId: "G-0S05MMNTMV",
};
if (!firebase?.apps?.length) {
  firebase?.initializeApp(firebaseConfig);
}
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
