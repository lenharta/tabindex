import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/main.scss';
import { Root } from './app';
import { Home, Checklist, Demo, Anatomy, Guide } from './app/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/demo', element: <Demo /> },
      { path: '/guide', element: <Guide /> },
      { path: '/anatomy', element: <Anatomy /> },
      { path: '/checklist', element: <Checklist /> },
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
