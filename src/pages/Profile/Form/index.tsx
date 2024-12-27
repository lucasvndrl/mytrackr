import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { ProfileFormData } from './schema'
import TextInput from '../../../components/TextInput'
import Avatar from '../../../components/Avatar'
import { Container } from './styles'
import AccessibilityHandler from '../../../utils/AccessibilityHandler'
import { t } from 'i18next'

interface RegisterUserForm {
  form: UseFormReturn<ProfileFormData>
}

const Form = ({ form }: RegisterUserForm) => {
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
        <TextInput form={form} label='Username' name='username' />
      </Container>
    </>
  )
}

export default Form
