import React from 'react'
import { IconContainer, IconRow, IconView } from './styles'
import * as ImagePicker from 'expo-image-picker'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'

interface AvatarProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
}

const Avatar = <T extends FieldValues>({ form, name }: AvatarProps<T>) => {
  const {
    control,
    formState: { errors },
  } = form

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
              <IconContainer onPress={() => pickImageAsync(onChange)}>
                <IconView
                  source={{
                    uri: value ? `data:image/jpeg;base64,${value}` : undefined,
                  }}
                />
              </IconContainer>
            </IconRow>
          </>
        )
      }}
    />
  )
}

export default Avatar
