import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// include the chakra provider
import {
  ChakraProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
)
