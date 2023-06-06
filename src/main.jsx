import React from 'react';
import ReactDOM from 'react-dom/client';
import '@babel/polyfill';

import { ChatPage } from './pages/ChatPage'
import { Provider } from 'react-redux'
import { store } from './store/store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChatPage />
    </Provider>
  </React.StrictMode>,
)
