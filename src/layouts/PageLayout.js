import { Outlet } from 'react-router-dom';

import HeaderBar from '../components/HeaderBar';
import Heading from '../components/Heading';
import ThemeToggler from '../components/ThemeToggler';

function PageLayout() {
  return (
    <div>
      <HeaderBar>
        <Heading level="1">Where in the world?</Heading>
        <ThemeToggler />
      </HeaderBar>
      <Outlet />
    </div>
  );
};

export default PageLayout;