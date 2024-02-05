import { Title } from '@/components/common';
import { Page, QueryDataItem, QuickSearch } from '../common';

const SAMPLE_QUERY_DATA: QueryDataItem[] = [
  {
    id: 'learn',
    label: 'Learn',
    value: '/learn',
    tags: ['learn', 'pages', 'routes', 'overview'],
  },
  {
    id: 'sandbox',
    label: 'Sandbox',
    value: '/sandbox',
    tags: ['sandbox', 'pages', 'routes', 'overview'],
  },
  {
    id: 'toolbox',
    label: 'Toolbox',
    value: '/toolbox',
    tags: ['toobox', 'pages', 'routes', 'overview'],
  },
  {
    id: 'accent_colors',
    label: 'Accent Colors',
    value: '/toolbox/accent',
    tags: ['toolbox', 'components', 'buttons'],
  },
  {
    id: 'surface_colors',
    label: 'Surface Colors',
    value: '/toolbox/surface',
    tags: ['toolbox', 'components', 'inputs'],
  },
  {
    id: 'button_gallery',
    label: 'Button Gallery',
    value: '/toolbox/button',
    tags: ['toolbox', 'colors', 'theme'],
  },
  {
    id: 'checkbox_gallery',
    label: 'Checkbox Gallery',
    value: '/toolbox/checkbox',
    tags: ['toolbox', 'colors', 'theme'],
  },
];

export const Home = () => (
  <Page>
    <Page.Hero title="Landing" />
    <Page.Content>
      <Title>Content</Title>
    </Page.Content>
  </Page>
);
