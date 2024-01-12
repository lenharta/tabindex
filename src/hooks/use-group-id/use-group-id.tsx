import * as React from 'react';
import { createRandomId } from '@/utils/create-random-id';

export function useGroupId(staticId: string) {
  const [uniqueId, setUniqueId] = React.useState(React.useId());

  React.useEffect(() => {
    setUniqueId((current) => `${staticId}:${current}:${createRandomId()}`);
  }, []);

  return uniqueId;
}
