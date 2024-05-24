import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <CloudinaryContext cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}>
        <App />
      </CloudinaryContext>
    </ClerkProvider>
  </BrowserRouter>
);
