import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { BackIcon, Button, IconClose, RowTextIcon } from './styles'
import { COLORS } from '../../constants/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/Auth'
import Typography from '../Typography'
import { useLanguageSelector } from '../../hooks/LanguageSelector'
import AccessibilityHandler from '../../utils/AccessibilityHandler'

type SimpleHeaderProps = {
  onPress: () => void
  closeIcon?: boolean
  userIcon?: boolean
  languageSelector?: boolean
  options?: { title?: string }
  route?: { params?: { title?: string } }
}

const SimpleHeader: FC<SimpleHeaderProps> = ({
  onPress,
  closeIcon,
  options,
  route,
  userIcon,
  languageSelector,
}) => {
  const title = route?.params?.title || options?.title || ' '
  const insets = useSafeAreaInsets()
  const hamburguerMenu = require('../../assets/icons/hamburguerMenu.png')
  const world = require('../../assets/icons/world.png')
  const user = require('../../assets/icons/user.png')
  const back = require('../../assets/icons/back.png')
  const { navigate } = useNavigation()
  const { openLanguageModal } = useLanguageSelector()

  const { authUser } = useAuth()

  return (
    <View
      style={{
        marginTop: insets.top,
        paddingLeft: insets.left + 8,
        paddingRight: insets.right + 8,
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <RowTextIcon>
        <AccessibilityHandler accessible>
          <Button onPress={onPress}>
            {closeIcon ? (
              <Image
                source={back}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ) : (
              <Image
                source={hamburguerMenu}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            )}
          </Button>
        </AccessibilityHandler>

        {title && (
          <View
            style={{
              marginRight: 230,
            }}
          >
            <Typography type='Heading 2'>{title}</Typography>
          </View>
        )}
      </RowTextIcon>

      {userIcon ? (
        <></>
      ) : (
        <View
          accessible
          accessibilityLabel='Profile picture clickable'
          accessibilityHint='Navigates to Profile screen'
          accessibilityRole='button'
          style={{
            marginRight: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigate('Profile' as never)}>
            <Image
              source={authUser.avatar ? { uri: `data:image/jpeg;base64,${authUser.avatar}` } : user}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      )}

      {!languageSelector ? (
        <></>
      ) : (
        <View
          accessible
          accessibilityLabel='Language selector'
          accessibilityHint='Navigates to Profile screen'
          accessibilityRole='button'
          style={{
            marginRight: 5,
          }}
        >
          <TouchableOpacity onPress={openLanguageModal}>
            <Image
              source={world}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default SimpleHeader
