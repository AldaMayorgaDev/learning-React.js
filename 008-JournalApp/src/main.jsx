// ** React
import React from 'react';
import ReactDOM from 'react-dom/client';
// ** General Styles
import './styles.css';
// ** Themes
import { AppTheme } from './theme/';
// ** Redux
import { Provider } from 'react-redux';
import { store } from './store';
// ** Main Component
import { JournalApp } from './JournalApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
