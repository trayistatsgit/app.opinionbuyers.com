import React, { useState } from 'react';
import{ LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,  } from 'react-native';

const SignUpPage: React.FC = ({ navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignup = () => {
    navigation.navigate("Login");
  };

  return (
    <LinearGradient 
    colors={['#CFEEFF', '#FFEFE5']} 
    start={{ x: 0.5, y: 0 }} 
    end={{ x: 0.5, y: 1 }}
    style={styles.container} // Use container styles
  >
    <View style={styles.container}>
       <Image source={require("./assets/opinionbuyerlogo.png")}style={styles.logo}/>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.bonuscon}>
     <Text style={styles.bonusText}>🎁 Sign Up and get upto $5 FREE Bonus!</Text>
     </View>
     <View style={styles.inputebox}>
        <TextInput
        style={styles.input}
        placeholder="Email address*"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password*"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Image
            source={showPassword ? require('./assets/eyeicon (2).png') : require('./assets/eye-off.png')} 
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
       
      </View>
      <View style={styles.termsContainer}>
        <Text>I accept the </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text> and </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.continueButton, !acceptedTerms && styles.disabledButton]} disabled={!acceptedTerms}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

 
      <View style={styles.socialSignUpContainer}>
        <TouchableOpacity style={styles.socialButton}>
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Image
            source={require("./assets/googleicon.png")}
            style={styles.googleImage}
          />
          <Text style={styles.gtext}>Google</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Image
            source={require("./assets/facebookicon.png")}
            style={styles.facebookImage}
          />
          <Text style={styles.ftext}>Facebook</Text>
        </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <TouchableOpacity style={styles.socialButtonContainer}>
          <Image
            source={require("./assets/appleicon.png")}
            style={styles.appleImage}
          />
          <Text style={styles.ftext}>Apple</Text>
         </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    height: 'auto',
    width: 'auto',
 },
  logo: {
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 50,
  marginLeft:70,
  gap: 10,
  marginBottom: 50,
  width: '59%',
  },
  head: {
    fontSize: 20,
    justifyContent: 'center',
  },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
   color: '#d2691e', 
  },
 bonuscon : {
    width: 'auto',
  },
  bonusText: {
    textAlign: 'center',
    color: '#141414',
    marginBottom: 20,
    fontSize: 18,
    },
    inputebox: {
     width:'auto',
    },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width:'100%',
     },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,  
    padding: 5,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#888', 
    marginTop: 12,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  linkText: {
    color: '#FF6F00',
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
    fontSize: 12, 
    marginTop: 2,
   },
  termsContainer: {
    flexDirection: 'row',
    fontSize: 2,
   marginLeft: 13,
   marginTop: 8,
  },
  continueButton: {
    backgroundColor: '#296d99', 
    padding: 8,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  disabledButton: {
  marginTop: 14,
   backgroundColor: '#296d99', 
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  socialSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginHorizontal: 7,
    gap : 49,
    height:'5%',
    marginLeft: 33,
    marginRight: 33,
  },
  socialButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 5,
    width: '36%',
    height: 38,
    alignItems: 'center',
    fontWeight: 'bold',
    },
  socialButtonContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: 'flex-end',
  },
  googleImage: {
   height:18,
   width: 18,
   marginTop: 3,
    },
  facebookImage: {
    height:19,
    width: 19,
    marginTop:3,
    },
   appleImage: {
    height: 22,
    width: 22,
    marginBottom: 3,
    marginRight: 10,
   },
 gtext: {
    fontSize:13,
    marginTop: 2,
    color: '#545454',
    fontWeight: 'bold',
   },
  ftext: {
    fontSize:13,
    marginTop: 3,
    color: '#545454',
    fontWeight: 'bold',
  },
  atext: {
    fontSize:14,
    marginTop: 2,
    marginRight: 13,
    color: '#545454',
    fontWeight: 'bold',
   },
  footer: {
    flexDirection: 'row',
   justifyContent: 'center',
   marginBottom: 13,
  },
  loginText: {
    color: '#ff6347', 
  },
});

export default SignUpPage;
