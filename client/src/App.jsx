import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Tours from './Pages/Tours';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /><Footer /></>
  },
  {
    path: '/tours',
    element: <><Navbar /><Tours /><Footer /></>
  },
  {
    path: '/gallery',
    element: <><Navbar /><Gallery /><Footer /></>
  },
  {
    path: '/about',
    element: <><Navbar /><About /><Footer /></>
  },
  {
    path: '/contact',
    element: <><Navbar /><Contact /><Footer /></>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-700'
        aria-label='Scroll to top'
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default App