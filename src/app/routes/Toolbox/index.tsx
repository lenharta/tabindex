import * as React from 'react';
import { Page } from '@/app/components';

export const Box = React.forwardRef<any, any>(
  <T extends React.ElementType>(
    props: { component?: T } & React.ComponentPropsWithoutRef<T> & {
        ref?: React.ComponentPropsWithRef<T>['ref'];
      },
    ref?: React.ForwardedRef<T>
  ) => {
    const { component = 'div', ...otherProps } = props;
    const Component = component || 'div';
    return <Component {...otherProps} ref={ref} />;
  }
);

export default function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero headline="Toolbox" />
      <Page.Content>
        <Box component="button">Box Button</Box>
      </Page.Content>
    </Page>
  );
}
