import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import { StoreContext } from '../store/useStore'

export default function Profile() {
  const { name } = useContext(StoreContext)

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}
