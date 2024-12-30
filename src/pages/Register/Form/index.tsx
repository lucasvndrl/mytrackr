import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { UserFormData } from './schema'
import TextInput from '../../../components/TextInput'
import MultiSelect from '../../../components/MultiSelect'
import Avatar from '../../../components/Avatar'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'
import AccessibilityHandler from '../../../utils/AccessibilityHandler'

interface RegisterUserForm {
  form: UseFormReturn<UserFormData>
}

const Form = ({ form }: RegisterUserForm) => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <Avatar form={form} name='avatar' />

        <TextInput
          form={form}
          label='Username'
          name='username'
          accessibilityHint={t('acs_register_username_hint')}
        />
        <MultiSelect form={form} name='favorite_genres' />
      </Container>
    </>
  )
}

export default Form
