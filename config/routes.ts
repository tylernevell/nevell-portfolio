import { DOMAIN } from './domain';

const NO_DRAFT = "!(_id in path('drafts.**'))";
const ROUTE = {
  PROFILE: `${DOMAIN}/api/profile`,
};

export { ROUTE, NO_DRAFT };
