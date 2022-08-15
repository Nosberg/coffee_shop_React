import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import { Provider } from 'react-redux/es/exports';
import store from './components/store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
  
);
