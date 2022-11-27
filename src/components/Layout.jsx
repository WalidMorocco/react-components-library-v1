import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';


export const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};
