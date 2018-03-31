import { ROUTE_HOME, ROUTE_SASS_ONLY, ROUTE_STYLED_COMP } from '../constants/routeNames';

const HOME = 'Home';
const SASS_ONLY = 'Sass Only';
const STYLED_COMPONENTS = 'Styled-Components Only';

export default [
  { name: HOME, route: ROUTE_HOME },
  { name: SASS_ONLY, route: ROUTE_SASS_ONLY },
  { name: STYLED_COMPONENTS, route: ROUTE_STYLED_COMP },
];
