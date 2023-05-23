import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { globalTheme } from '../styles/GlobalTheme'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={globalTheme.config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
