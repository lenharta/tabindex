import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/main.scss';
import Layout from './layout';
import * as Routes from '@/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Routes.Home /> },
      { path: '/guide', element: <Routes.Guide /> },
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
