import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { StoreContext } from '../store/useStore'

export default function App() {
  const [showMenu, setShowMenu] = useState(false)
  const { name, setName } = useContext(StoreContext)

  const changeName = async () => {
    await AsyncStorage.setItem('name', 'Jane Doe')
    setName('Jane Doe')
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>{name}</Text>
        <Link href="/profile">Profile</Link>
        <TouchableOpacity onPress={changeName}>
          <Text>Change Name</Text>
        </TouchableOpacity>
        <View style={{ height: 1000, backgroundColor: 'orange' }}></View>
        <View style={{ height: 1000, backgroundColor: 'blue' }}></View>
        <View style={{ height: 1000, backgroundColor: 'green' }}></View>
        <View style={{ height: 1000, backgroundColor: 'yellow' }}></View>
      </ScrollView>

      <View
        showMenu={showMenu}
        style={{
          ...styles.tabs,
          transform: [{ translateY: showMenu ? 0 : 100 }],
          transitionProperty: 'transform',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease-in-out',
        }}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})
