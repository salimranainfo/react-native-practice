import { useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const StoreContext = createContext()

export default function StoreContextLayout({ children }) {
  const [name, setName] = useState('John Doe')

  console.log(AsyncStorage)

  AsyncStorage.getItem('name').then((value) => {
    if (value) {
      setName(value)
    }
  })

  return <StoreContext.Provider value={{ name, setName }}>{children}</StoreContext.Provider>
}
