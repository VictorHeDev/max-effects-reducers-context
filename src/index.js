import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// context
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
