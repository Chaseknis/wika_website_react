import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => (
  <>
    <Header />
    <main className="page_container">
      <Outlet />
    </main>
  </>
);

export default MainLayout;
