import React from 'react'
import { Controller, FieldError, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import StarRating from 'react-native-star-rating-widget'
import { HelperText } from 'react-native-paper'
import { getProperty } from '../../utils/object'
import { useTranslation } from 'react-i18next'

interface StarRatingInputProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  label?: string
  starSize?: number
  enableHalfStar?: boolean
  acsLabel?: string
  acsAdjustmentLabelPreStar?: string
  acsAdjustementLabelPostStar?: string
}

const StarRatingInput = <T extends FieldValues>({
  form,
  name,
  label,
  starSize = 30,
  enableHalfStar = false,
  acsLabel,
  acsAdjustmentLabelPreStar,
  acsAdjustementLabelPostStar,
}: StarRatingInputProps<T>) => {
  const {
    control,
    formState: { errors },
  } = form

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          <StarRating
            rating={value}
            onChange={onChange}
            starSize={starSize}
            enableHalfStar={enableHalfStar}
            enableSwiping={true}
            accessibilityLabel={acsLabel}
          />
          <HelperText type='error'>
            {getProperty<FieldError>(errors, name)?.message ?? ' '}
          </HelperText>
        </>
      )}
    />
  )
}

export default StarRatingInput
