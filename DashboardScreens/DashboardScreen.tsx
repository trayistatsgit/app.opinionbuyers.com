/*
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-vector-icons/Icon';


type Survey = {
    id: string;
    time: string;
    points: number;
  };
  
  
  const surveys: Survey[] = [
    { id: 'OPE4569', time: '10 Min', points: 95 },
    { id: 'OPE4569', time: '10 Min', points: 45 },
    { id: 'OPE4569', time: '10 Min', points: 25 },
    { id: 'OPE4569', time: '10 Min', points: 60 },
    { id: 'OPE4569', time: '10 Min', points: 50 },
    { id: 'OPE4569', time: '10 Min', points: 10 },
  ];
  
const DashboardScreen: React.FC = ({}) => {
  return (
   <ScrollView style={styles.container}>
   <View style={styles.header}>
   <Text style={styles.headerText}>My Dashboard</Text>
   </View>
   <View style={styles.statsContainer}>
        <StatBox icon="account-question" label="Total Points" value="112" />
        <StatBox icon="format-list-checkbox" label="Survey Completed" value="44" />
        <StatBox icon="timer-sand-empty" label="Points Remaining" value="37" />
      </View>
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>Complete your profiler</Text>
        <LinearGradient
          colors={['#ff9800', '#ffc107']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBar}
        >
          <View style={[styles.progress, { width: '40%' }]} />
        </LinearGradient>
      </View>
      <View style={styles.surveysContainer}>
        <Text style={styles.surveysHeader}>Top Surveys</Text>
        <FlatList
          data={surveys}
          renderItem={({ item }) => <SurveyItem survey={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const StatBox = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
    <View style={styles.statBox}>
      <Icon name={icon} size={30} color="#ffffff" />
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );

  const SurveyItem = ({ survey }: { survey: Survey }) => (
    <View style={styles.surveyItem}>
      <Text style={styles.surveyText}>{survey.id}</Text>
      <Text style={styles.surveyText}>{survey.time}</Text>
      <Text style={styles.surveyText}>{survey.points}</Text>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D5FFFF',
    },
    header: {
      padding: 20,
      backgroundColor: '#333',
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 20,
      backgroundColor: '#0b3954',
    },
    statBox: {
      alignItems: 'center',
    },
    statLabel: {
      color: '#fff',
      fontSize: 16,
    },
    statValue: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    progressBarContainer: {
      margin: 20,
    },
    progressText: {
      fontSize: 16,
      marginBottom: 5,
    },
    progressBar: {
      height: 20,
      borderRadius: 10,
      overflow: 'hidden',
    },
    progress: {
      height: '100%',
      backgroundColor: '#ffc107',
    },
    surveysContainer: {
      paddingHorizontal: 20,
    },
    surveysHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    surveyItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 1,
    },
    surveyText: {
      fontSize: 16,
    },
    startButton: {
      backgroundColor: '#ff9800',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 5,
    },
    startButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default DashboardScreen; */
