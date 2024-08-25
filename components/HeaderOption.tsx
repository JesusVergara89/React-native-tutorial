import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import Logo1 from '@/assets/svg/Logo1'

const HeaderOption = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.container}>
         <Logo1 width={72*1.8} height={22*1.8} />
        <Text style={styles.containerLogoName} >Transactions</Text>
        </View>
    </SafeAreaView>
  )
}

export default HeaderOption

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.cards,
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
        fontSize: 26,
        color: Colors.white,
        fontWeight: "600",
    }
})