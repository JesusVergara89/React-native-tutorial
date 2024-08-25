import HeaderOption from '@/components/HeaderOption';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';

const Page = () => {

    return (
        <>
            <Stack.Screen options={{
                header: () => <HeaderOption />
            }} />
            <View style={styles.container} >
                <Text style={styles.text}>Options</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.cards
    },
    text: {
        color: Colors.white
    }
})

export default Page;