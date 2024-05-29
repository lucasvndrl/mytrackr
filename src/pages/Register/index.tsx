import React, { useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Typography from '../../components/Typography'
import { useAuth0 } from 'react-native-auth0'
import Loading from '../../components/Loading'
import { useAuth } from '../../hooks/Auth'
import { ButtonContainer, Container, PageTitleContainer } from './styles'
import { useForm } from 'react-hook-form'
import { UserFormData, getUserFormDefaultValues, userFormSchema } from './Form/schema'
import Form from './Form'
import { COLORS } from '../../constants/theme'
import { ActivityIndicator } from 'react-native'

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<string>()

  const userFormDefaultValues = useMemo(() => getUserFormDefaultValues(), [])

  const form = useForm<UserFormData>({
    defaultValues: userFormDefaultValues,
    resolver: zodResolver(userFormSchema),
  })

  const onSubmit = () => {
    console.log(form.formState.errors)
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitleContainer>
            <Typography type='Heading 2' color={COLORS.white}>
              Register user
            </Typography>
          </PageTitleContainer>
          <Form form={form} />
          <ButtonContainer onPress={form.handleSubmit(onSubmit)}>
            <Typography type='Heading 2' color={COLORS.white}>
              Register
            </Typography>
          </ButtonContainer>
        </>
      )}
    </Container>
  )
}

export default Register
