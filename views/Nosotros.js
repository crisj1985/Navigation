import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Nosotros = ({ navigation }) => {
  const volver = () => {
    navigation.goBack();
    // navigation.push('Inicio');
  };

  return (
    <View styles={styles.contenedor}>
      <Text>Nosotros</Text>
      <Button title="Volver" onPress={() => volver()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
