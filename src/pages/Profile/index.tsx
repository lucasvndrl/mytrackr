import { zodResolver } from '@hookform/resolvers/zod'
import { isEqual } from 'lodash'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth0 } from 'react-native-auth0'
import CustomModal from '../../components/CustomModal'
import Loading from '../../components/Loading'
import Typography from '../../components/Typography'
import { messages } from '../../constants/messages'
import { COLORS } from '../../constants/theme'
import { useAuth } from '../../hooks/Auth'
import { deleteUser, updateUserDetails } from '../../services/userService'
import Form from './Form'
import { ProfileFormData, getUserFormDefaultValues, profileFormSchema } from './Form/schema'
import { ButtonContainer, ButtonDeleteContainer, Container, PageTitleContainer } from './styles'
import { ToastAndroid } from 'react-native'

export interface UpdateAccount {
  username: string
  email: string
  avatar: string | null
}

const Profile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [userDeleted, setUserDeleted] = useState<boolean>(false)
  const { getCredentials, clearSession } = useAuth0()
  const { authUser, setAuthUser } = useAuth()

  const userFormDefaultValues = useMemo(
    () =>
      getUserFormDefaultValues({
        avatar: authUser?.avatar,
        username: authUser?.login,
      }),
    [authUser],
  )

  const form = useForm<ProfileFormData>({
    defaultValues: userFormDefaultValues,
    resolver: zodResolver(profileFormSchema),
  })

  const watchedValues = form.watch()

  const hasChanged = useMemo(
    () => !isEqual(watchedValues, userFormDefaultValues),
    [watchedValues, userFormDefaultValues],
  )

  const onSubmit = async () => {
    setIsLoading(true)
    const token = await getCredentials().then((res) => res?.accessToken)
    const formValues = form.getValues() as UpdateAccount
    const registerData = { ...formValues, email: authUser.email }

    if (token)
      await updateUserDetails(registerData, token)
        .then(() => {
          setAuthUser({
            ...authUser,
            login: registerData.username,
            avatar: registerData.avatar ? registerData.avatar : undefined,
          }),
            showToastUserUpdated()
        })
        .catch((e) => {
          console.log(e.response)
          setIsLoading(false)
          setShowModal(true)
        })
        .finally(() => {
          setShowModal(false)
          setIsLoading(false)
        })
  }

  const handleAccountDelete = async () => {
    setIsLoading(true)
    const token = await getCredentials().then((res) => res?.accessToken)

    if (token) {
      try {
        const result = await deleteUser(token)

        if (result.status === 200) {
          setIsLoading(false)
          setUserDeleted(true)
          setShowModal(true)
        }
      } catch (e) {
        console.log(e)
        setIsLoading(false)
        setShowModal(true)
      }
    }
    setIsLoading(false)
  }

  const handleCloseModal = () => {
    clearSession()
    setAuthUser({
      logged: false,
      login: '',
      userId: '',
      email: '',
    })
  }

  const showToastUserUpdated = () => {
    ToastAndroid.showWithGravityAndOffset(
      messages.toast_user_updated_successfully,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitleContainer>
            <Typography type='Heading 2' color={COLORS.white}>
              Update profile
            </Typography>
          </PageTitleContainer>
          <Form form={form} />
          <ButtonContainer onPress={form.handleSubmit(onSubmit)} disabled={!hasChanged}>
            <Typography type='Heading 2' color={COLORS.white}>
              {hasChanged ? 'Submit changes' : 'Nothing has changed'}
            </Typography>
          </ButtonContainer>
          <ButtonDeleteContainer onPress={handleAccountDelete}>
            <Typography type='Heading 2' color={COLORS.white}>
              Delete account
            </Typography>
          </ButtonDeleteContainer>
          {showModal && (
            <CustomModal
              buttonMessage={
                userDeleted
                  ? messages.user_deleted_successfully_button
                  : messages.user_update_error_button
              }
              onCloseModal={userDeleted ? handleCloseModal : () => {}}
              openModal={showModal}
              message={
                userDeleted
                  ? messages.user_deleted_successfully_msg
                  : messages.user_update_error_msg
              }
              title={
                userDeleted
                  ? messages.user_deleted_successfully_title
                  : messages.user_update_error_title
              }
            />
          )}
        </>
      )}
    </Container>
  )
}

export default Profile
