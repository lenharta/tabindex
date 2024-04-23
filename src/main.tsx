import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/main.scss';
import { Root } from './app';
import { ChecklistRoute, DemoRoute, AnatomyRoute, GuideRoute } from './app/routes';
import { OverviewRoute } from './app/routes/Overview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <OverviewRoute /> },
      { path: '/demo', element: <DemoRoute /> },
      { path: '/guide', element: <GuideRoute /> },
      { path: '/anatomy', element: <AnatomyRoute /> },
      { path: '/checklist', element: <ChecklistRoute /> },
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
