import React from 'react';

import Title from '../Components/Title';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  entryContainer: {
    margin: "8px 0px",
  },
  date: {
    fontSize: 9,
    color: '#808080'
  },
  descriptionContainer: {
    flexDirection: 'row',
    fontSize: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  leftColumn: {
    flexDirection: 'column',
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
    fontSize: 9
  },
  title: {
    fontSize: 10,
    fontWeight: 500,
    textDecoration: 'none',
  },
});

const ExperienceEntry = ({ employer, description, title, date }) => {
  const workTitle = `${employer} | ${title}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{workTitle}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
        
      <Text style={styles.descriptionContainer}>
        {description}
      </Text>
    </View>
  );
};

const Experience = ({experience}) => (
  <View>
    <Title>Arbetshistoria</Title>
    {experience.map(({ experience_id, employer, start_date, end_date, description, title }) => (
      <ExperienceEntry
        employer={employer || 'Arbetsgivare'}
        date={start_date + ( end_date ? ' - ' + end_date : '')}
        description={description || 'Beskrivning'}
        key={experience_id}
        title={title || 'Titel'}
      />
    ))}
  </View>
);

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object)
};

Experience.defaultProps = {
  experience: [{
      title: 'Kundtjänst',
      employer: 'Aspiranterna',
      startDate: 'Jan 2000',
      endDate: 'Okt 2005',
      experience_id: 'id',
      description: 'Problemlösning och kundkontakt var två ledord för min roll på Aspiranterna. Jag lärde mig det interna butikssystemet utantill och fick en bred förståelse för företagets produkter.'
  }]
};

export default Experience;