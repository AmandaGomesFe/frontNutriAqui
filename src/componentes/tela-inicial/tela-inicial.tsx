import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

export default function TelaInicial({ navigation } : any) {

    useEffect(() => {
        setTimeout(() => {
          navigation.replace('login');
        }, 2000);
      }, []);
    return(
        <SafeAreaView>
            <View style={styles.background}>
                <Image style={styles.imagem} source={require('../../assets/logoNutriAqui.png')}></Image>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#404040'
    },
    imagem: {
        borderRadius: 90,
    }
});