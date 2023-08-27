import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }: any) {
    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/imagemBackground.png')} resizeMode="cover" style={styles.imagemFundo}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../assets/logoNutriAqui.png')}></Image>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('escolher-perfil')}
                    >
                        <Text style={styles.textBtnCadastrar} >Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imagemFundo: {
        height: '100%'
    },
    logo: {
        alignItems: 'center',
        marginTop: 60
    },
    textBtnCadastrar: {
        fontSize: 18,
        color: 'white'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})