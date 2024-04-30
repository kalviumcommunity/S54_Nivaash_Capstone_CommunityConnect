// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <CloudinaryContext cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}>
        <App />
      </CloudinaryContext>
    </Auth0Provider>
  </BrowserRouter>
);
