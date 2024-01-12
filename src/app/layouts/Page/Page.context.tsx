import { type TContextPage } from './Page.types';
import { createSecureContext } from '@/utils';

export const [PageContextProvider, usePageContext] = createSecureContext<TContextPage>(
  '[ERROR]:[@/app/layout/Page]: Component not found in context tree.'
);
