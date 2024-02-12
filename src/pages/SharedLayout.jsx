import { Outlet } from 'react-router-dom';
import Nav from '../component/homepage/navbar/NavBar';

const SharedLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
export default SharedLayout;
