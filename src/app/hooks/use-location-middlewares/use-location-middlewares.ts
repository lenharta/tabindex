type LocationMiddlewareOptions = { baseUrl?: string; baseId?: string };
type LocaleMiddlewarePayload = { previous: string; current: string };

type LocaleMiddlewareData = {
  ids: LocaleMiddlewarePayload;
  urls: LocaleMiddlewarePayload;
};

interface LocationMiddleware {
  parseLocationIds(): string[];
  parseLocationUrls(): string[];
  createLocaleIds(): LocaleMiddlewarePayload;
  createLocaleUrls(): LocaleMiddlewarePayload;
  createLocaleData(): LocaleMiddlewareData;
}

const useLocationMiddlewares = (
  location: Location,
  options?: LocationMiddlewareOptions
): LocationMiddleware => {
  const { pathname } = location;

  const BASE_ID = options?.baseId || 'home';
  const BASE_URL = options?.baseUrl || '/';

  const parseLocationIds: () => string[] = () => pathname.split(BASE_URL).splice(1);
  const parseLocationUrls: () => string[] = () => parseLocationIds().map((p) => BASE_URL + p);

  const createLocaleIds: () => LocaleMiddlewarePayload = React.useCallback(() => {
    return parseLocationIds().reduce((acc, curr, index, array) => {
      const previous = index > 0 ? array[index - 1] : BASE_ID;
      const payload = { previous, current: curr };
      return { ...acc, ...payload };
    }, {} as LocaleMiddlewarePayload);
  }, [location, options]);

  const createLocaleUrls: () => LocaleMiddlewarePayload = React.useCallback(() => {
    return parseLocationUrls().reduce((acc, curr, index, array) => {
      const previous = index > 0 ? array[index - 1] : BASE_URL;
      const current = index > 0 ? previous + curr : curr;
      const payload = { previous, current };
      return { ...acc, ...payload };
    }, {} as LocaleMiddlewarePayload);
  }, [location, options]);

  const createLocaleData: () => LocaleMiddlewareData = React.useCallback(
    () => ({ ids: createLocaleIds(), urls: createLocaleUrls() }),
    [location, options]
  );

  return {
    parseLocationIds,
    parseLocationUrls,
    createLocaleIds,
    createLocaleUrls,
    createLocaleData,
  };
};

// const LocationMiddlewareDemo = () => {
//   const location = useLocation();
//   const middlewares = useLocationMiddlewares(location);
//   const { ids, urls } = middlewares.createLocaleData();
//   return (
//     <div>
//       <div>
//         <p>PREVIOUS-ID: {ids.previous}</p>
//         <p>CURRENT-ID: {ids.current}</p>
//       </div>
//       <div>
//         <p>PREVIOUS-URL: {urls.previous}</p>
//         <p>CURRENT-URL: {urls.current}</p>
//       </div>
//     </div>
//   );
// };
