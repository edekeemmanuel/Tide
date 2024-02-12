import { Outlet } from 'react-router-dom';
import Nav from '../component/homepage/navbar/NavBar';

const SharedLayout = () => {
  return (
    <div>
      <Nav primary={false}/>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
