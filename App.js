import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./img/logo.png')} style={styles.marginImg} />

      <Text style={styles.titulo}>EFETUAR LOGIN</Text>
      <TextInput style={styles.inputs}
      defaultValue=' LOGIN'
      />
       <TextInput style={styles.inputs}
      defaultValue='PASSWORD'
      />
      <View style={styles.botoes}>
        <Button
          title="LOGAR"
          onPress={() => Alert.alert('Login Efetuado!')}
        />
        <Button
          title="CADASTRAR"
          onPress={() => Alert.alert('Forms de Cadastro!')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#B0C4DE',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputs:{
    borderColor: '#efefef',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    width: 220,
    margin: 8,
    padding: 8,
  },
  marginImg:{
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
