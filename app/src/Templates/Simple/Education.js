import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from '../Components/Title';
import LeftContainer from '../Components/LeftContainer';

const styles = StyleSheet.create({
  school: {
    fontSize: 10,
    fontWeight: 500,
  },
  degree: {
    fontSize: 10,
  },
  date: {
    fontSize: 10,
    color: '#808080'
  },
  entry: {
    marginBottom: 10,
  },
});

const Eduction = ({education}) => (
  <LeftContainer>
    <Title>Utbildning</Title>
    {education.map((education, i) => (
      <View key={education.school} style={styles.entry}>
        <Text style={styles.school}>{education.school}</Text>
        <Text style={styles.degree}>{education.degree}</Text>
        <Text style={styles.date}>{education.startDate} - {education.endDate}</Text>
      </View>
    ))}
  </LeftContainer>
)

Eduction.propTypes = {
  education: PropTypes.arrayOf(PropTypes.object),
  skills: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object)
};

Eduction.defaultProps = {
  education: [{
      school: 'Skola',
      degree: 'Utbildning',
      startDate: 'Jan 2000',
      endDate: 'Dec 2005'
  }]
};


export default Eduction;
