import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root.tsx';
import { RootError, Home } from '@/app/routes';
import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <h1>About</h1> },
      { path: '/contact', element: <h1>Contact</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
