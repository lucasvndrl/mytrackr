import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { UserFormData } from './schema'
import TextInput from '../../../components/TextInput'
import MultiSelect from '../../../components/MultiSelect'
import Avatar from '../../../components/Avatar'
import { Container } from './styles'

interface RegisterUserForm {
  form: UseFormReturn<UserFormData>
}

const Form = ({ form }: RegisterUserForm) => {
  return (
    <>
      <Container>
        <Avatar form={form} name='avatar' />
        <TextInput form={form} label='Username' name='username' />
        <TextInput form={form} label='Email' name='email' />
        <MultiSelect form={form} name='favorite_genres' />
      </Container>
    </>
  )
}

export default Form
