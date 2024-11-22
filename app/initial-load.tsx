import { router } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  useFonts,
  LibreCaslonText_400Regular,
  LibreCaslonText_700Bold,
} from "@expo-google-fonts/libre-caslon-text";

export default function InitialLoad() {
  useEffect(() => {
    const loadInitialContent = async () => {
      console.log("Loading initial content...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Navigating to /tabs...");
      router.replace("/(tabs)/home");
    };

    loadInitialContent();
  }, []);
  const [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("@/assets/images/clothes.png")}
      >
        <View>
        <Text style={styles.heading}>Stylish</Text>
        
        </View>
          

        <View style={styles.description}>
          <Text style={styles.descriptionText}>         You Want!{" "} </Text>
          <Text style={styles.descriptionText}>  Authentic ,Here  {" "} </Text>
          <Text style={styles.descriptionText}>          you go!{" "} </Text>

          <Text style={{fontSize:18,color:"white",textAlign:"center",marginTop:10,}}>Find it here , buy it now!{" "}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent:"center",
    gap:'50%',
    alignItems:"center",
   

  },
  heading: {

    fontFamily: "LibreCaslonText_700Bold",
    fontSize: 70,
    color: "#ffffff",
  },
  description: {

    color: "#ffffff",
     borderRadius:20,
     backgroundColor:""
    
  },
  descriptionText: {
    opacity:1,
    fontSize: 34,
    fontWeight:"900",
    color: "white",
  },
});

// Let me break down the navigation flow I've designed:

// 1. Root Navigation (`app/_layout.tsx`):
//    - Defines the main stack of screens
//    - Uses Expo Router's `Stack` for managing navigation
//    - Screens are configured with `headerShown: false` for custom UI

// 2. Initial Entry Point (`app/index.tsx`):
//    - Checks if it's the user's first time using the app
//    - If first time, redirects to onboarding screens
//    - If not first time, checks for existing login token
//    - Redirects to either login or initial load screen based on authentication status

// 3. Onboarding Screens (`app/onboarding/index.tsx`):
//    - Displays 3 preview screens
//    - Allows skipping or moving to next screen
//    - Ultimately leads to login screen

// 4. Authentication Flow (`app/auth/login.tsx`):
//    - Login screen with options to:
//      - Log in
//      - Forgot password (goes to reset password)
//      - Sign up
//    - On successful login, redirects to initial load screen

// 5. Initial Load Screen (`app/initial-load.tsx`):
//    - Shows a splash screen while loading initial content
//    - Simulates data fetching with a timeout
//    - Redirects to main tab navigation after loading

// 6. Tab Navigation (`app/(tabs)/_layout.tsx`):
//    - Implements 5 tabs: Home, Wishlist, Shop, Search, Profile

// Key Points:
// - Uses AsyncStorage to manage first-time user and authentication state
// - Follows the flow you described for first-time and returning users
// - Utilizes Expo Router for seamless navigation
// - Provides placeholders for login, onboarding, and tab screens

// Recommendations:
// 1. Replace placeholder styles with your actual design
// 2. Implement actual authentication logic in login screen
// 3. Add proper error handling
// 4. Consider adding more robust state management (e.g., Redux, Context)

// Would you like me to elaborate on any part of the navigation structure or discuss implementation details further?
