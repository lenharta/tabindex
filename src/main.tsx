import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';

import { Root, RootError } from '@/app';
import { Home, Learn, Sandbox, Toolbox } from '@/app/routes';
import {
  LearnOverview,
  SandboxOverview,
  ToolboxOverview,
  GalleryAccent,
  GallerySurface,
  GalleryButton,
  GallerySwitch,
  GalleryCheckbox,
  GalleryRadio,
  GalleryCard,
  GalleryTool,
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
          { path: '/toolbox/tool', element: <GalleryTool /> },
          { path: '/toolbox/card', element: <GalleryCard /> },
          { path: '/toolbox/radio', element: <GalleryRadio /> },
          { path: '/toolbox/accent', element: <GalleryAccent /> },
          { path: '/toolbox/button', element: <GalleryButton /> },
          { path: '/toolbox/switch', element: <GallerySwitch /> },
          { path: '/toolbox/surface', element: <GallerySurface /> },
          { path: '/toolbox/checkbox', element: <GalleryCheckbox /> },
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
