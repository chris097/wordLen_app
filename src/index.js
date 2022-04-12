import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import {theme, fonts} from './theme';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider theme={fonts}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
  </ChakraProvider>
);


