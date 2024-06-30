import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { COLORS } from '../../constants/theme'
import Typography from '../Typography'

interface ModalProps {
  title: string
  message: string
  buttonMessage: string
  openModal: boolean
  onCloseModal?: () => void
}

const CustomModal = ({ title, message, openModal, buttonMessage, onCloseModal }: ModalProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (openModal) setVisible(true)
  }, [openModal])
  const hideModal = () => {
    onCloseModal ? onCloseModal() : () => {}
    setVisible(false)
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerModal as any}
      >
        <Typography type='Heading 2' color={COLORS.white}>
          {title}
        </Typography>
        <Typography type='Lead Paragraph' color={COLORS.white}>
          {message}
        </Typography>
        <Button mode='contained' onPress={hideModal}>
          {buttonMessage}
        </Button>
      </Modal>
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
}

export default CustomModal
