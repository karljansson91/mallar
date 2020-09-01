import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    margin: '6px',
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#282828'
  },
});

const Header = ({name, role}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  )
}


Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

Header.defaultProps = {
  name: 'Förnamn Efternamn',
  role: 'Titel',
};

export default Header;