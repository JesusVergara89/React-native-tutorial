import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import Logo1 from '@/assets/svg/Logo1'

const Header = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.container}>
        <Image style={styles.profileImage} source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} />
         <Logo1 width={72*1.5} height={22*1.5} />
        <Text style={styles.containerLogoName} >Hi, Asrael</Text>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.backgorund,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    containerLogoName: {
        fontSize: 20,
        color: Colors.white
    }
})