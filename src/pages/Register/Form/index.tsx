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
        <AccessibilityHandler
          accessible
          accessibilityLabel={t('acs_register_avatar')}
          accessibilityHint={t('acs_register_avatar_hint')}
        >
          <Avatar form={form} name='avatar' />
        </AccessibilityHandler>
        <AccessibilityHandler
          accessible
          accessibilityLabel={t('acs_register_username')}
          accessibilityHint={t('acs_register_username_hint')}
        >
          <TextInput form={form} label='Username' name='username' />
        </AccessibilityHandler>
        <MultiSelect form={form} name='favorite_genres' />
      </Container>
    </>
  )
}

export default Form
