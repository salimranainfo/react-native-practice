import { Slot, Navigator } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import StoreContextLayout from '../store/useStore'
import { Link } from 'expo-router'

export default function HomeLayout() {
  return (
    <StoreContextLayout>
      <Navigator>
        <View>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Slot />
        </View>
      </Navigator>
    </StoreContextLayout>
  )
}
