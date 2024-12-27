import React, { createContext, useState, useContext } from 'react'

type LanguageProviderProps = {
  children: React.ReactNode
}

const LanguageContext = createContext({
  languageModalVisible: false,
  openLanguageModal: () => {},
  closeLanguageModal: () => {},
})

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [languageModalVisible, setLanguageModalVisible] = useState(false)

  const openLanguageModal = () => setLanguageModalVisible(true)
  const closeLanguageModal = () => setLanguageModalVisible(false)

  const contextValue = {
    languageModalVisible,
    openLanguageModal,
    closeLanguageModal,
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export const useLanguageSelector = () => useContext(LanguageContext)
