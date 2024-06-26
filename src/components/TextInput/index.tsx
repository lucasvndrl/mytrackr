import { Controller, FieldError, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { KeyboardTypeOptions } from 'react-native'
import MaskInput, { Mask } from 'react-native-mask-input'
import { HelperText, TextInput as Input } from 'react-native-paper'
import { getProperty } from '../../utils/object'

interface TextInputProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  label: string
  disabled?: boolean
  mask?: Mask
  keyboardType?: KeyboardTypeOptions
}

const TextInput = <T extends FieldValues>({
  form,
  name,
  label,
  disabled,
  mask,
  keyboardType,
}: TextInputProps<T>) => {
  const {
    control,
    formState: { errors },
  } = form

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Input
            label={label}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType={keyboardType}
            render={mask ? (props) => <MaskInput {...props} mask={mask} /> : undefined}
            disabled={disabled}
          />
          <HelperText type='error'>
            {getProperty<FieldError>(errors, name)?.message ?? ' '}
          </HelperText>
        </>
      )}
    />
  )
}

export default TextInput