import * as Router from 'react-router-dom';

import { GuideCard } from './Card';
import { GuideBoard } from './Board';

function Guide(): JSX.Element {
  return <Router.Outlet />;
}

Guide.Card = GuideCard;
Guide.Board = GuideBoard;
Guide.displayName = 'Route.Guide';
export { Guide };
