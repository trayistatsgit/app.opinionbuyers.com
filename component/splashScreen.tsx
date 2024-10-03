import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

const splashScreen = ({ navigation }: any) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login'); 
      }, 2000); 
    }, [navigation]);
  
    return (
      <LinearGradient 
      colors={['#CFEEFF', '#FFEFE5']} 
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }}
      style={styles.container} // Use container styles
    >
      <View style={styles.splashContainer}>
      <Image source={require("./assets/Oblogo.png")}/>
      </View>
      </LinearGradient>
    );
  };

  const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#F0F8FF', 
    },
});

  export default splashScreen ;