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
    errorElement: <Routes.Error />,
    children: [
      { index: true, element: <Routes.Home /> },
      { path: '/proto', element: <Routes.Proto /> },
      {
        path: '/guide',
        element: <Routes.Guide />,
        children: [
          { index: true, element: <Routes.Guide.Board /> },
          { path: '/guide/card', element: <Routes.Guide.Card /> },
        ],
      },
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
