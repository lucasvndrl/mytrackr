import React, { useEffect, useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { COLORS } from '../../constants/theme'
import Typography from '../Typography'
import { TouchableOpacity } from 'react-native'
import AccessibilityHandler from '../../utils/AccessibilityHandler'
import { useTranslation } from 'react-i18next'

interface ModalProps {
  title: string
  message?: string
  buttonMessage?: string
  openModal: boolean
  options?: { label: string; value: string }[]
  onOptionSelect?: (value: string) => void
  onCloseModal?: () => void
}

const CustomModal = ({
  title,
  message,
  openModal,
  buttonMessage = 'Close',
  options = [],
  onOptionSelect,
  onCloseModal,
}: ModalProps) => {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation()
  useEffect(() => {
    if (openModal) setVisible(true)
  }, [openModal])

  const hideModal = () => {
    if (onCloseModal) onCloseModal()
    setVisible(false)
  }

  const handleOptionSelect = (value: string) => {
    if (onOptionSelect) onOptionSelect(value)
    hideModal()
  }

  return (
    <Portal>
      <AccessibilityHandler accessible accessibilityLabel={t('acs_modal')}>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerModal as any}
        >
          <AccessibilityHandler accessible>
            <Typography type='Heading 2' color={COLORS.white}>
              {title}
            </Typography>
          </AccessibilityHandler>

          {message && (
            <AccessibilityHandler accessible>
              <Typography type='Lead Paragraph' color={COLORS.white}>
                {message}
              </Typography>
            </AccessibilityHandler>
          )}

          {options.length > 0 ? (
            options.map((option) => (
              <AccessibilityHandler accessible>
                <TouchableOpacity
                  key={option.value}
                  onPress={() => handleOptionSelect(option.value)}
                  style={styles.optionSelect as any}
                >
                  <Typography type='Button Title' color={COLORS.white}>
                    {' '}
                    {option.label}
                  </Typography>
                </TouchableOpacity>
              </AccessibilityHandler>
            ))
          ) : (
            <Button mode='contained' onPress={hideModal}>
              {buttonMessage}
            </Button>
          )}
        </Modal>
      </AccessibilityHandler>
    </Portal>
  )
}

const styles = {
  containerModal: {
    padding: RFValue(20),
    backgroundColor: COLORS.secondaryBackground,
    margin: RFValue(20),
    borderRadius: RFValue(10),
    height: RFValue(250),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  optionSelect: {
    marginTop: RFValue(10),
    width: '100%',
    elevation: 2,
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(10),
    backgroundColor: COLORS.background,
  },
}

export default CustomModal
