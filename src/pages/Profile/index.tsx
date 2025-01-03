import { zodResolver } from '@hookform/resolvers/zod'
import { isEqual } from 'lodash'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth0 } from 'react-native-auth0'
import CustomModal from '../../components/CustomModal'
import Loading from '../../components/Loading'
import Typography from '../../components/Typography'
import { COLORS } from '../../constants/theme'
import { useAuth } from '../../hooks/Auth'
import { deleteUser, updateUserDetails } from '../../services/userService'
import Form from './Form'
import { ProfileFormData, createProfileFormSchema, getUserFormDefaultValues } from './Form/schema'
import { ButtonContainer, ButtonDeleteContainer, Container, PageTitleContainer } from './styles'
import { Alert, ToastAndroid } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useLanguageSelector } from '../../hooks/LanguageSelector'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AccessibilityHandler from '../../utils/AccessibilityHandler'
import { useMovies } from '../../hooks/Movies'

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
  const { getMovies } = useMovies()
  const { t } = useTranslation()
  const { closeLanguageModal, languageModalVisible } = useLanguageSelector()
  const { i18n } = useTranslation()

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
    resolver: zodResolver(createProfileFormSchema()),
  })

  const watchedValues = form.watch()

  const hasChanged = useMemo(
    () => !isEqual(watchedValues, userFormDefaultValues),
    [watchedValues, userFormDefaultValues],
  )

  const onSubmit = async () => {
    setIsLoading(true)
    const token = await getCredentials().then((res) => res?.accessToken)
    const formValues = form.getValues() as unknown as UpdateAccount
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
      t('toast_user_updated_successfully'),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
  }

  const handleLanguageChange = async (language: string) => {
    setIsLoading(true)
    await i18n.changeLanguage(language).catch((e) => {
      setIsLoading(false)
      Alert.alert(t('generic_error'), t('error_changing_language'))
      return
    })
    await AsyncStorage.setItem('language', language)
    await getMovies()
    Alert.alert(`${t('generic_success')}`, `${t('success_changing_language')}`)
    setIsLoading(false)
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitleContainer>
            <Typography type='Heading 2' color={COLORS.white}>
              {t('update_profile_text')}
            </Typography>
          </PageTitleContainer>
          <Form form={form} />
          <AccessibilityHandler
            accessible
            accessibilityRole='button'
            accessibilityHint={t('acs_update_profile_button_hint')}
          >
            <ButtonContainer onPress={form.handleSubmit(onSubmit)} disabled={!hasChanged}>
              <Typography type='Heading 2' color={COLORS.white}>
                {hasChanged ? t('submit_changes_profile') : t('nothing_has_changed_profile')}
              </Typography>
            </ButtonContainer>
          </AccessibilityHandler>
          <AccessibilityHandler accessibilityRole='button' accessible>
            <ButtonDeleteContainer onPress={handleAccountDelete}>
              <Typography type='Heading 2' color={COLORS.white}>
                {t('delete_account_text')}
              </Typography>
            </ButtonDeleteContainer>
          </AccessibilityHandler>

          {languageModalVisible && (
            <CustomModal
              title={t('select_language_modal_title')}
              openModal={languageModalVisible}
              onCloseModal={closeLanguageModal}
              options={[
                { label: `${t('language_option_english')}`, value: 'en' },
                { label: `${t('language_option_portuguese')}`, value: 'pt' },
              ]}
              onOptionSelect={handleLanguageChange}
            />
          )}
          {showModal && (
            <CustomModal
              buttonMessage={
                userDeleted ? t('user_deleted_successfully_button') : t('user_update_error_button')
              }
              onCloseModal={userDeleted ? handleCloseModal : () => {}}
              openModal={showModal}
              message={
                userDeleted ? t('user_deleted_successfully_msg') : t('user_update_error_msg')
              }
              title={
                userDeleted ? t('user_deleted_successfully_title') : t('user_update_error_title')
              }
            />
          )}
        </>
      )}
    </Container>
  )
}

export default Profile
