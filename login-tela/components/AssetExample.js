import * as React from 'react';
import {View, StyleSheet,TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
  <TextInput label="login" />
  <TextInput label="Senha"/>
   
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
