import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      violet: "hsl(263, 55%, 52%)",
      greyBlue: "hsl(217, 19%, 35%)",
      blackBlue: "hsl(219, 29%, 14%)",
      white:"hsl(0, 0%, 100%)",
      lightGrey: "hsl(0, 0%, 81%)",
      lightGreyBlue: "hsl(210, 46%, 95%)"
    }
  },
  breakpoints:{
    sm:"376px"
  }
})
export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}
