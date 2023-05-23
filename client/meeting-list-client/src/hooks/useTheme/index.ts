import { useColorModeValue } from '@chakra-ui/react'

function useTheme() {
  return {
    background: useColorModeValue('#FFF', '#151718'),
    hoverbackground: useColorModeValue('#f1f3f5', '#26292b'),
    backgroundAlert: '#fff3cd',
    backgroundInfo: '#cce5ff',
    border: {
      color: useColorModeValue('#dfe3e6', '#313538'),
      hoverColor: useColorModeValue('#d7dbdf', '#3a3f42'),
      colorAlert: '#ffeeba',
      colorInfo: '#b8daff',
      radius: 5,
    },
    avatar: {
      text: '#cd1d8d',
      background: '#f9d8ec',
    },

    text: useColorModeValue('#3a3f42', '#ecedee'),
    textInfo: '#004085',
    textAlert: '#856404',
    textSection: useColorModeValue('#959595', '#959595'),

    button: {
      color: '#fe761c',
      colorInfo: '#004085',
      text: '#ecedee',
      colorAlert: '#856404',
      colorTextAlert: '#ffeeba',
    },
    size: {
      maxWidth: 1248,
    },
    table: {
      th: {
        background: useColorModeValue('#f8f9fa', '#1a1d1e'),
      },
    },
  }
}

export default useTheme
