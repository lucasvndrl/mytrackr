import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { ProfileFormData } from './schema'
import TextInput from '../../../components/TextInput'
import Avatar from '../../../components/Avatar'
import { Container } from './styles'

interface RegisterUserForm {
  form: UseFormReturn<ProfileFormData>
}

const Form = ({ form }: RegisterUserForm) => {
  return (
    <>
      <Container>
        <Avatar form={form} name='avatar' />
        <TextInput form={form} label='Username' name='username' />
      </Container>
    </>
  )
}

export default Form