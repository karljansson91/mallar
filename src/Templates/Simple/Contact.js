import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from '@react-pdf/renderer';
import Title from '../Components/Title';
import LeftContainer from '../Components/LeftContainer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  details: {
    fontSize: 10,
    marginBottom: 2
  },
});

const Contact = ({phone, email}) => {
  return (
    <LeftContainer>
        <Title>Kontakt</Title>
        <Text style={styles.details}>{phone}</Text>
        <Text style={styles.details}>{email}</Text>
    </LeftContainer>
  )
}


Contact.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
};

Contact.defaultProps = {
    phone: 'phone',
    email: 'email',
};

export default Contact;