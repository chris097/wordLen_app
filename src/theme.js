// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
export const theme = extendTheme({ config });

export const fonts = extendTheme({
  fonts: {
    body: "Inter, sans-serif"
  }
})