import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { IconContainer, IconRow, IconView } from './styles'
import AccessibilityHandler from '../../utils/AccessibilityHandler'
import { useTranslation } from 'react-i18next'

interface AvatarProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
}

const Avatar = <T extends FieldValues>({ form, name }: AvatarProps<T>) => {
  const {
    control,
    formState: { errors },
  } = form
  const { t } = useTranslation()

  const pickImageAsync = async (onChange: (value: string) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 1,
      allowsEditing: true,
    })

    if (!result.canceled) {
      onChange(result.assets[0].base64 ? result.assets[0].base64 : '')
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <IconRow>
              <AccessibilityHandler
                accessible
                accessibilityRole='button'
                accessibilityLabel={t('acs_review_profile_picture')}
                accessibilityHint={t('acs_avatar_update_hint')}
              >
                <IconContainer onPress={() => pickImageAsync(onChange)}>
                  <IconView
                    source={{
                      uri: value ? `data:image/jpeg;base64,${value}` : undefined,
                    }}
                  />
                </IconContainer>
              </AccessibilityHandler>
            </IconRow>
          </>
        )
      }}
    />
  )
}

export default Avatar
