import React from 'react'
import { render } from '@testing-library/react-native'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18nForTesting'

const customRender = (ui, { language = 'en', ...renderOptions } = {}) => {
  i18n.changeLanguage(language)

  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>, renderOptions)
}

export * from '@testing-library/react-native'
export { customRender }
