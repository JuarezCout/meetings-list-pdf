import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { globalTheme } from '../styles/GlobalTheme'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  return (
    <ChakraProvider resetCSS theme={globalTheme}>
      <ToastContainer />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
