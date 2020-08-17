import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    marginBottom: 5,
  },
  skills: {
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = ({skills}) => (
  <View>
    <Title>Skills</Title>
    {skills.map((skill) => (
      <React.Fragment>
        <SkillEntry
          name={skill.title}
          skills={skill.skills}
        />
       </React.Fragment>
    ))}
  </View>
);

export default Skills;