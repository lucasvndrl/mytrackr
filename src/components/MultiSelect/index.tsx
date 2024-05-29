import React, { useState } from 'react'
import { Container } from './styles'
import SelectItem from './SelectItem'
import {
  Controller,
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form'
import { defaultGenresValues } from '../../pages/Register/Form/defaultGenresValues'
import { HelperText } from 'react-native-paper'
import { getProperty } from '../../utils/object'
import Typography from '../Typography'
import { COLORS } from '../../constants/theme'

export interface ItemProps {
  selected: boolean
  id: number
  name: string
}

interface MultiSelectProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
}

const MultiSelect = <T extends FieldValues>({ form, name }: MultiSelectProps<T>) => {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
  } = form

  const handleItemChange = (id: number) => {
    const currentItems = getValues(name) as ItemProps[]
    const updatedItems = currentItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item,
    )
    setValue(name, updatedItems as PathValue<T, Path<T>>)
  }

  return (
    <>
      <Typography type='Heading 2' color={COLORS.white}>
        Favorite genres
      </Typography>
      <Container>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultGenresValues as PathValue<T, Path<T>>}
          render={({ field }) => {
            const currentItems = field.value
            return currentItems.map((item: ItemProps) => (
              <SelectItem
                key={item.id}
                selected={item.selected}
                name={item.name}
                id={item.id}
                setItems={() => handleItemChange(item.id)}
              />
            ))
          }}
        />
      </Container>
      <HelperText type='error'>{getProperty<FieldError>(errors, name)?.message ?? ' '}</HelperText>
    </>
  )
}

export default MultiSelect
