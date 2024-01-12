import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Root, RootError } from '@/app';
import { Home, Sandbox, Toolbox } from '@/app/routes';
import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sandbox', element: <Sandbox /> },
      { path: '/toolbox', element: <Toolbox /> },
    ],
  },
]);

const rootOptions: ReactDOM.RootOptions = {
  identifierPrefix: 'tabindex:',
};

ReactDOM.createRoot(document.getElementById('root')!, rootOptions).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
