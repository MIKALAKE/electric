import Pages from 'Pages';
import Paths from './paths';

// public routes
const NotFound = {
  component: Pages.public.NotFound,
  path: Paths.public.NOT_FOUND,
};

const LandingPage = {
  component: Pages.public.LandingPage,
  path: Paths.public.LANDING_PAGE,
};

const LoadingScreen = {
  component: Pages.public.LoadingScreen,
  path: Paths.public.LOADING_SCREEN,
};

const publicRoutes = [LandingPage, LoadingScreen, NotFound];

export { publicRoutes };

export default { publicRoutes };
