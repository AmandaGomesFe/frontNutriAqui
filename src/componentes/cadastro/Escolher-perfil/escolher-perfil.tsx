import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function EscolherPerfil({ navigation } : any) {
    return(
        <SafeAreaView>
            <ImageBackground source={require('../../../assets/imagemBackground.png')} resizeMode="cover">
                <View style={styles.containerButton}>
                    <Text style={styles.title}>Escolha o seu perfil</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulario-nutricionista')}>
                        <Image
                            style={styles.imagem}
                            source={require('../../../assets/nutricionista.png')}
                        ></Image>
                        <Text style={styles.buttonText}>Nutricionista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulario-paciente')}>
                        <Image
                            style={styles.imagem}
                            source={require('../../../assets/perfil-de-usuario.png')}
                        ></Image>
                        <Text style={styles.buttonText}>Paciente</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#666666',
        height: '100%',
        width: 400,
    },

    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: 'white'
    },

    button: {
      backgroundColor: '#FF8642',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 200,
      width: 200,
      margin: 30,
      borderRadius: 30,
      paddingBottom: 0,
      shadowColor: 'black', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.5, shadowRadius: 5,
    },

    buttonText: {
        backgroundColor: 'white',
        height: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 200,
        paddingTop: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontSize: 18
    },

    imagem: {
        width: 100,
        height: 100,
        paddingBottom: 40,
        marginBottom: 20,
        marginTop: 30
    }
    
});