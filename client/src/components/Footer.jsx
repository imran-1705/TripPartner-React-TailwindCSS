import { Link } from 'react-router-dom';
import footer from '../assets/footer-pattern.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white' style={{ backgroundImage: `url(${footer})`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
      <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div>
            <h1 className='mb-4 text-3xl font-bold'><span className='text-emerald-400'>Trip</span>Partner</h1>
            <p className='text-sm text-slate-300'>We curate unforgettable journeys with comfort, style, and personalized attention at every step.</p>
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-slate-300'>
              <li><Link to='/' className='transition hover:text-white'>Home</Link></li>
              <li><Link to='/tours' className='transition hover:text-white'>Tours</Link></li>
              <li><Link to='/gallery' className='transition hover:text-white'>Gallery</Link></li>
              <li><Link to='/about' className='transition hover:text-white'>About</Link></li>
              <li><Link to='/contact' className='transition hover:text-white'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Contact Us</h3>
            <ul className='space-y-2 text-sm text-slate-300'>
              <li>Travel Street, Mumbai</li>
              <li>+91 9833556006</li>
              <li>imranmirza6006@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 text-xl'>
              <a href='https://facebook.com' target='_blank' rel='noreferrer' className='transition hover:text-emerald-300'><FaFacebook /></a>
              <a href='https://instagram.com' target='_blank' rel='noreferrer' className='transition hover:text-emerald-300'><FaInstagram /></a>
              <a href='https://twitter.com' target='_blank' rel='noreferrer' className='transition hover:text-emerald-300'><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-slate-700 pt-6 text-center text-sm text-slate-300'>
          <p>&copy; {new Date().getFullYear()} TripPartner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer