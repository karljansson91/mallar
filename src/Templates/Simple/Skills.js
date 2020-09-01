import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import LeftContainer from '../Components/LeftContainer';
import Title from '../Components/Title';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  details: {
    fontSize: 10,
    marginBottom: 2,
  },
});

const Skills = ({skills}) => {
  return (
    <LeftContainer>
      <Title>Kompetens</Title>
      {skills.map(skill => (
          <Text key={skill} style={styles.details}>{skill}</Text>
      ))}
    </LeftContainer>
  )
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  skills: ['Javscript', 'Python', 'Rest API', 'Kafka', 'Ruby'],
};

export default Skills;