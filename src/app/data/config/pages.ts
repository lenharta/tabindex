export const DATA_CONFIG_ROUTES = {
  '/': 'Home',
  '/learn': 'Learn',
  '/toolbox': 'Toolbox',
  '/sandbox': 'Sandbox',
};

export const DATA_CONFIG_SUBROUTES = {
  '/toolbox/accent': 'Accent Theme',
  '/toolbox/surface': 'Surface Theme',
  '/toolbox/switch': 'Switch Component',
  '/toolbox/button': 'Button Component',
  '/toolbox/checkbox': 'Checkbox Component',
};

export const DATA_CONFIG = {
  ...DATA_CONFIG_ROUTES,
  ...DATA_CONFIG_SUBROUTES,
};
