import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const HeaderProfile = () => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.container}>
                <Image style={styles.profileImage} source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} />
                <Text style={styles.containerLogoName} >Welcome, Asrael</Text>
            </View>
        </SafeAreaView>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.clear,
    },
    container: {
        justifyContent: "center",
        textAlign: "center",
        height: 70,
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 70,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    containerLogoName: {
        fontSize: 28,
        color: Colors.white,
        marginTop: 10,
        fontWeight: "700",
    }
})