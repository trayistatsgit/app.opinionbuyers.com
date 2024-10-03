import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from './Header';
import LoginModal from './LoginModal';
import SignUpForm from './SignUpForm';
import styles from './style';

const HomeScreen: React.FC = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [isSignUpModalVisible, setSignUpModalVisible] = useState<boolean>(false);

  const toggleLoginModal = () => {
    setLoginModalVisible(!isLoginModalVisible) 
  };

  const toggleSignUpModal = () => {
    setSignUpModalVisible(!isSignUpModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Header toggleLoginModal={toggleLoginModal} />

      <LoginModal visible={isLoginModalVisible} toggleLoginModal={toggleLoginModal} />

      <View style={styles.mainContent}>
        <Text style={styles.mainHeader}>Take Free Survey To Earn Rewards</Text>
        <Text style={styles.subheader}>Start your expedition with Opinion Buyers</Text>
        <Text style={styles.mainDescription}>
          Your opinion is incredibly valuable to brands, and they are eager to hear it.
          By sharing your honest thoughts and feedback, you can help them improve their products and services.
        </Text>
      </View>

      <TouchableOpacity style={styles.joinButton} onPress={toggleSignUpModal}>
        <Text style={styles.joinButtonText}>Join Today!</Text>
      </TouchableOpacity>
      
      {isSignUpModalVisible && <SignUpForm toggleSignUpModal={toggleSignUpModal} />}
    </ScrollView>
  );
};

export default HomeScreen;