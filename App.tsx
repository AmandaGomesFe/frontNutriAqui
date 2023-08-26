
import React from 'react';
import {
  SafeAreaView, Text, View
} from 'react-native';
import EscolherPerfil from './src/componentes/cadastro/Escolher-perfil/escolher-perfil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormularioPaciente from './src/componentes/cadastro/formulario-paciente/formulario-paciente';
import FormularioNutricionista from './src/componentes/cadastro/formulario-nutricionista/formulario-nutricionista';

const Stack = createNativeStackNavigator();

function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={EscolherPerfil} options={{ headerShown: false }}/>
          <Stack.Screen name="Formulario-paciente" component={FormularioPaciente} options={{title: ''}}/>
          <Stack.Screen name="Formulario-nutricionista" component={FormularioNutricionista} options={{title: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
