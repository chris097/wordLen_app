import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import {theme, fonts} from './theme';
import {Provider} from "react-redux";
import { store } from './libs/store';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider theme={fonts}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
  </ChakraProvider>
);


