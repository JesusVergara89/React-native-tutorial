import Colors from '@/constants/Colors';
import { HomeIcon, OptionsIcon, UserIcon } from '@/constants/Icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.backgorundClear,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignSelf: "center",
        height: 80,
        marginHorizontal: 0,
        paddingHorizontal: 10,
        paddingVertical: 8,
        paddingBottom: 8,
        //borderRadius: 20,
        borderWidth: 1,
        borderTopWidth: 1,
        borderColor: "#333",
        borderTopColor: "#333"
      },
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "#999",
      tabBarActiveTintColor: Colors.clear
    }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View >
              <HomeIcon size={25} color={color} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View >
              <OptionsIcon size={25} color={color}/>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View >
              <UserIcon size={25} color={color} />
            </View>
          )
        }}
      />
    </Tabs>
  );
}
