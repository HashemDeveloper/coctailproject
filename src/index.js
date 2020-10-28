import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
