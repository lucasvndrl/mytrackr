import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth0 } from 'react-native-auth0'
import Loading from '../../components/Loading'
import Typography from '../../components/Typography'
import { COLORS } from '../../constants/theme'
import { useAuth } from '../../hooks/Auth'
import Form from './Form'
import { UserFormData, getUserFormDefaultValues, userFormSchema } from './Form/schema'
import { ButtonContainer, Container, PageTitleContainer } from './styles'
import CustomModal from '../../components/CustomModal'
import { messages } from '../../constants/messages'

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { handleRegister } = useAuth()
  const { user, getCredentials } = useAuth0()

  const userFormDefaultValues = useMemo(() => getUserFormDefaultValues(), [])

  const form = useForm<UserFormData>({
    defaultValues: userFormDefaultValues,
    resolver: zodResolver(userFormSchema),
  })

  const onSubmit = async () => {
    setShowModal(false)
    setIsLoading(true)
    const token = await getCredentials().then((res) => res?.accessToken)
    const registerData = form.getValues()
    const favoriteGenresSelected = registerData.favorite_genres
      .filter((genre) => genre.selected)
      .map((genre) => genre.name)

    await handleRegister({
      avatar: registerData.avatar ? registerData.avatar : '',
      email: user?.email ? user?.email : '',
      username: registerData.username,
      user_id: user?.sub ? user?.sub : '',
      accessToken: token ? token : '',
      created_at: new Date(),
      last_login: new Date(),
      favorite_genres: favoriteGenresSelected,
    })
    setIsLoading(false)
  }

  useEffect(() => {
    setShowModal(true)
  }, [])

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
          {showModal && (
            <CustomModal
              buttonMessage={messages.register_needed_button}
              openModal={showModal}
              message={messages.register_needed_msg}
              title={messages.register_needed_title}
            />
          )}
        </>
      )}
    </Container>
  )
}

export default Register
