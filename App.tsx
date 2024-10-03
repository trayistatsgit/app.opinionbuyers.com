/*
import React from 'react';
import { Image, Text, View } from 'react-native';
 
const App = () => {
  return (
<View>
<Text>Welcome to your React Native TypeScript App!</Text>
<Image source={require('./assets/icon.png')} />
</View>
  );
};
 
export default App; */

/*
import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreens/DashboardScreen';
import SurveyScreen from './DashboardScreens/SurveyScreen';
import PointScreen from './DashboardScreens/PointsScreen';
import RedeemPointScreen from './DashboardScreens/RedeemPointsScreen';
import ProfileScreen from './DashboardScreens/ProfileScreen';
import ContactUsScreen from './DashboardScreens/ContactUsScreen';



type DrawerParamList = {
  Dashboard: any;
  Survey: any;
  Points: any;
  RedeemPoints: any;
  Profile: any;
  ContactUs: any;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({

          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Three Dots Pressed')}>
             <Image source={require('./assets/Icon.png')}/>
            </TouchableOpacity>
          ),

          headerMiddal: () => (
           <Text style={{ marginRight: 28, fontSize: 18, fontWeight: 'bold' }}>opinionBuyers</Text>
          ),
          drawerStyle: {
            backgroundColor: '#0A374F',
          },
        })}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Survey" component={SurveyScreen} />
        <Drawer.Screen name="Points" component={PointScreen} />
        <Drawer.Screen name="RedeemPoints" component={RedeemPointScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="My Dashboard"
        focused={props.state.index === 0}
        onPress={() => props.navigation.navigate('Dashboard')}
       activeBackgroundColor="orange"
       inactiveBackgroundColor="#0A374F"
      />
      <Image source={require('./assets/Icon.png')}/>
      <DrawerItem
        label="My Survey"
        focused={props.state.index === 1}
        onPress={() => props.navigation.navigate('Survey')}
        activeBackgroundColor='light orange'
        activeTintColor="orange"
        inactiveTintColor="white"
         />
         <Image source={require('./assets/Icon.png')}/>
      <DrawerItem
        label="My Points"
        focused={props.state.index === 2}
        onPress={() => props.navigation.navigate('Points')}
        activeBackgroundColor='light orange'
        activeTintColor="orange"
        inactiveTintColor="white"
       
      />
      <DrawerItem
        label="My Redeem Points"
        focused={props.state.index === 3}
        onPress={() => props.navigation.navigate('RedeemPoints')}
        activeBackgroundColor='light orange'
        activeTintColor="orange"
        inactiveTintColor="white"
       
      />
      <DrawerItem
        label="My Profile"
        focused={props.state.index === 4}
        onPress={() => props.navigation.navigate('Profile')}
        activeBackgroundColor='light orange'
        activeTintColor="orange"
        inactiveTintColor="white"
       
      />
       <DrawerItem
        label="Contact Us"
        focused={props.state.index === 5}
        onPress={() => props.navigation.navigate('ContactUs')}
        activeBackgroundColor='light orange'
        activeTintColor="orange"
        inactiveTintColor="white"
       
      />
       <DashboardScreen/>
    </DrawerContentScrollView>
   
  );
}; 
 */

import { SafeAreaView,StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './component/FrontPage';
import SignUpPage from './component/SignUpPage';
import splashScreen from './component/splashScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={splashScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Login"  component={FrontPage}  options={{ headerShown: false }}/>
       <Stack.Screen name="SignUp" component={SignUpPage}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

