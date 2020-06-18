import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Index = ({navigation}) => {

  const irNosotros = () => {
    navigation.navigate('Nosotros', cliente);
  };
    
  const cliente = {
    clienteId:6330,
    totalPagar:500
  };

  return (

    <View styles={styles.contenedor}>
      <Text>Inicio</Text>
      <Button
        title="Ir Nosotros"
        onPress = {()=> irNosotros()}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  contenedor : {
    flex:1,
    alignItems :'center',
    justifyContent: 'center'

  }
});
export default Index;
