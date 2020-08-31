import React from 'react';

import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

const LeftContainer = ({ children }) => <View style={styles.container}>{children}</View>;

export default LeftContainer;