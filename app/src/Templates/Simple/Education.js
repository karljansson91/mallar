import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  degree: {
    fontSize: 10,
  },
  candidate: {
    fontSize: 10,
  },
  entry: {
    marginBottom: 10,
  },
});

export default ({education}) => (
  <View style={styles.container}>
    <Title>Education</Title>
    {education.map((education, i) => (
      <View style={styles.entry}>
        <Text style={styles.school}>{education.school}</Text>
        <Text style={styles.degree}>{education.degree}</Text>
        <Text style={styles.candidate}>{education.start} - {education.end}</Text>
      </View>
    ))}
  </View>
);