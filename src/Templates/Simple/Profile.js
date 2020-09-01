import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from '@react-pdf/renderer';
import Title from '../Components/Title';
import LeftContainer from '../Components/LeftContainer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  body: {
    fontSize: 10,
    marginBottom: '4px',
    lineHeight: 1.4,
  },
});

const Profile = ({profile}) => {
  return (
    <LeftContainer>
        <Title>Profil</Title>
        <Text style={styles.body}>{profile}</Text>
    </LeftContainer>
  )
}


Profile.propTypes = {
    profile: PropTypes.string,
};

Profile.defaultProps = {
    profile: 'Beskrivning om din arbets profil och personlighet.',
};

export default Profile;