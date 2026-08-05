import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import InvoiceModal from './InvoiceModal';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/tours', label: 'Tours' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }
  ];


  return (
    <header className='sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-lg'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
          <Link to='/' className='text-2xl font-bold text-white'>
          Trip<span className='text-emerald-400'>Partner</span>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                  `text-sm font-semibold transition ${isActive ? 'text-emerald-300' : 'text-slate-200 hover:text-white'}`
                }
            >
              {link.label}
            </NavLink>
          ))}
        <button
          onClick={() => setShowInvoice(true)}
          className='rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700'
        >
          Book Now
        </button>
        </nav>

        <button onClick={() => setShowMenu((value) => !value)} className='rounded-full p-2 text-white md:hidden'>
          <HiMenuAlt1 size={28} />
        </button>
      </div>

      {showMenu && (
        <div className='border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden'>
          <div className='flex flex-col gap-3'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) => `font-medium ${isActive ? 'text-emerald-300' : 'text-slate-200'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      <InvoiceModal open={showInvoice} onClose={() => setShowInvoice(false)} />
    </header>
  );
};

export default Navbar