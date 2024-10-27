import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"

import { theme } from "./Theme/theme.ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './Theme/globalStyle.ts';
import { Provider } from 'react-redux';
import { store } from './Store/Store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)