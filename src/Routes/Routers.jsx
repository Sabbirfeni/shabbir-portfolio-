import { createBrowserRouter } from 'react-router-dom';
// import Hero from '../components/Hero';
import RootLayout from '../Layouts/RootLayout';
import About from '../components/About'

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
    },
    {
      path: "/about",
      element: <About/>,
    }
  ]);

export default router;