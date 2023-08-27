import React from 'react';
import {
  SafeAreaView, Text, View
} from 'react-native';
import EscolherPerfil from './src/componentes/cadastro/Escolher-perfil/escolher-perfil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormularioPaciente from './src/componentes/cadastro/formulario-paciente/formulario-paciente';
import FormularioNutricionista from './src/componentes/cadastro/formulario-nutricionista/formulario-nutricionista';
import Login from './src/componentes/login/login';
import TelaInicial from './src/componentes/tela-inicial/tela-inicial';

const Stack = createNativeStackNavigator();

function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="telaInicial">
          <Stack.Screen name='telaInicial'component={TelaInicial} options={{ headerShown: false }}/>
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="escolher-perfil" component={EscolherPerfil} options={{title: ''}}/>
          <Stack.Screen name="Formulario-paciente" component={FormularioPaciente} options={{title: ''}}/>
          <Stack.Screen name="Formulario-nutricionista" component={FormularioNutricionista} options={{title: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
