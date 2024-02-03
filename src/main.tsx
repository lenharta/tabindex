import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';

import { Root, RootError } from '@/app';
import { Home, Learn, Sandbox, Toolbox } from '@/app/routes';
import {
  AccentGallery,
  SurfaceGallery,
  ToolboxOverview,
  SandboxOverview,
  ButtonGallery,
  CheckboxGallery,
  SwitchGallery,
  LearnOverview,
} from '@/app/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/learn',
        element: <Learn />,
        children: [{ index: true, element: <LearnOverview /> }],
      },
      {
        path: '/sandbox',
        element: <Sandbox />,
        children: [{ index: true, element: <SandboxOverview /> }],
      },
      {
        path: '/toolbox',
        element: <Toolbox />,
        children: [
          { index: true, element: <ToolboxOverview /> },
          { path: '/toolbox/accent', element: <AccentGallery /> },
          { path: '/toolbox/surface', element: <SurfaceGallery /> },
          { path: '/toolbox/button', element: <ButtonGallery /> },
          { path: '/toolbox/switch', element: <SwitchGallery /> },
          { path: '/toolbox/checkbox', element: <CheckboxGallery /> },
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
