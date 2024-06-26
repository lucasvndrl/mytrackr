import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Typography from '../Typography'
import { COLORS } from '../../constants/theme'
import { useAuth0 } from 'react-native-auth0'
import { useAuth } from '../../hooks/Auth'

const CustomDrawerContent = (props: any) => {
  const { clearSession } = useAuth0()
  const { setAuthUser } = useAuth()

  const handleLogout = () => {
    clearSession()
    setAuthUser({
      logged: false,
      email: '',
      userId: '',
      login: '',
      avatar: '',
    })
    props.closeDrawer()
  }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.customItemContainer}>
        <TouchableOpacity style={styles.customItem} onPress={() => handleLogout()}>
          <Typography type='Heading 3' color={COLORS.white}>
            Sign out
          </Typography>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  customItemContainer: {
    padding: 20,
  },
  customItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})

export default CustomDrawerContent
