import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './style';

interface HeadProps {
    toggleLoginModal: () => void;
}

const Header: React.FC<HeadProps> = ({toggleLoginModal}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>OpninionBuyers</Text>
      <TouchableOpacity style={styles.loginButton} onPress={toggleLoginModal}>
      <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;