import * as React from 'react';
import { capitalize } from '@/utils';
import { Link, LinkGroup } from '@/components/common';
import { useLocation } from 'react-router-dom';

export type PageContentProps = {
  children?: React.ReactNode;
};

type Locale = { url: string; label: string; id: string };

const useRouterLocation = () => {
  const { pathname } = useLocation();

  const createRoutes = () => {
    const data: Locale[] = [];
    const paths = pathname.slice(1).split('/');

    if (pathname.length >= 0) {
      data.push({ url: '/', label: 'Home', id: 'home' });
    }

    if (pathname.length > 1) {
      paths.forEach((path, index, arr) => {
        const prev = arr[index - 1];
        const currPath = '/' + path;
        const prevPath = '/' + prev + currPath;

        data.push({
          id: path,
          label: capitalize(path),
          url: !prev ? currPath : prevPath,
        });
      });
    }

    return data;
  };

  return { createRoutes };
};

const QuickLinkMenu = () => {
  const { createRoutes } = useRouterLocation();
  const routes = createRoutes();
  return (
    <div className="tbdx-quick-link-menu">
      <LinkGroup>
        {routes.map(({ id, url, label }, index) => (
          <React.Fragment key={id}>
            {index !== 0 && <span>{'>'}</span>}
            <Link to={url} id={id}>
              {label}
            </Link>
          </React.Fragment>
        ))}
      </LinkGroup>
    </div>
  );
};

export const PageContent = (props: PageContentProps) => {
  const { children } = props;
  return (
    <>
      <div className="tbdx-page-content" id="main_content">
        {children}
      </div>
    </>
  );
};
