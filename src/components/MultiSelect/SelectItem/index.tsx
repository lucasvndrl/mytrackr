import React from 'react'
import { ItemContainer } from './styles'
import Typography from '../../Typography'
import { ItemProps } from '..'
import { SetFieldValue } from 'react-hook-form'
import AccessibilityHandler from '../../../utils/AccessibilityHandler'

export interface SelectItemProps {
  setItems: SetFieldValue<any>
  items?: ItemProps[]
  selected: boolean
  id: number
  name: string
}

const SelectItem = ({ selected, name, items, setItems, id }: SelectItemProps) => {
  // const updateItem = (id: number, selected: boolean) => {
  //   setItems(
  //     items.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           selected,
  //         }
  //       }
  //       return item
  //     }),
  //   )
  // }

  return (
    <AccessibilityHandler accessible accessibilityLabel={name}>
      <ItemContainer selected={selected} onPress={setItems}>
        <Typography type='Input Label'>{name}</Typography>
      </ItemContainer>
    </AccessibilityHandler>
  )
}

export default SelectItem
