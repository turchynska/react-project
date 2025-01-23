import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
);
