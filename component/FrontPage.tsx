import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FrontPage: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    navigation.navigate("SignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}  
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <LinearGradient
            colors={['#CFEEFF', '#FFEFE5']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
          >
            <View style={styles.container}>
              <Image source={require("./assets/opinionbuyerlogo.png")} style={styles.logo} />
              <Text style={styles.title}>Log in</Text>
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

              <TouchableOpacity>
                <Text style={[styles.forgotPassword, styles.underlineText]}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <TouchableOpacity style={styles.socialButtonContainer}>
                    <Image source={require("./assets/googleicon.png")} style={styles.googleImage} />
                    <Text style={styles.gtext}>Google</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <TouchableOpacity style={styles.socialButtonContainer}>
                    <Image source={require("./assets/facebookicon.png")} style={styles.facebookImage} />
                    <Text style={styles.ftext}>Facebook</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <TouchableOpacity style={styles.socialButtonContainer}>
                    <Image source={require("./assets/appleicon.png")} style={styles.appleImage} />
                    <Text style={styles.atext}>Apple</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Text style={styles.footertext}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignup}>
                  <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 13,
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginLeft: 70,
    gap: 10,
    marginBottom: 40,
    width: '55%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#d2691e',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
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
  forgotPassword: {
    textAlign: 'left',
    marginLeft: 7,
    color: '#d2691e',
    marginBottom: 13,
    fontWeight: 'bold',
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: '#d2691e',
  },
  continueButton: {
    backgroundColor: '#296d99',
    padding: 10,
    borderRadius: 24,
    marginBottom: 20,
    height: '7%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    gap: 48,
    height: '6%',
    marginHorizontal: 22,
  },
  socialButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
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
    height: 20,
    width: 20,
    marginTop: 3,
  },
  facebookImage: {
    height: 20,
    width: 20,
    marginTop: 3,
  },
  appleImage: {
    height: 22,
    width: 22,
    marginTop: 3,
  },
  gtext: {
    fontSize: 13,
    marginTop: 2,
    color: '#545454',
    fontWeight: 'bold',
  },
  ftext: {
    fontSize: 13,
    marginTop: 3,
    color: '#545454',
    fontWeight: 'bold',
  },
  atext: {
    fontSize: 14,
    marginTop: 2,
    marginRight: 13,
    color: '#545454',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  footertext: {
    fontSize: 40,
    textAlign: 'justify',
  },
  footerContainer: {
    marginTop: 80,
  },
  signUpText: {
    color: '#ff6347',
    fontSize: 15,
  },
});

export default FrontPage;
