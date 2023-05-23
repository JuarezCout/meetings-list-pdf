import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/styled-system'
import { useColorModeValue } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  maxWidth: '1200px',
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        backgroundColor: useColorModeValue('#f1f3f5', '#0c0d0e'),
        text: useColorModeValue('#0c0d0e', '#f1f3f5'),
      },
    }),
  },
})
