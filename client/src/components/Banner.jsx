import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='relative flex min-h-[420px] items-center justify-center overflow-hidden' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='absolute inset-0 bg-slate-950/70' />
      <div className='relative z-10 mx-auto max-w-3xl px-4 text-center text-white md:px-6'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300'>Limited seasonal offers</p>
        <h2 className='mb-6 text-4xl font-bold sm:text-5xl'>Ready to start your next adventure?</h2>
        <p className='mb-8 text-lg text-slate-200'>Reserve a spot in our most requested journeys and enjoy premium service from the first click to the final destination.</p>
        <Link to='/tours' className='rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700'>Start Planning</Link>
      </div>
    </section>
  );
};

export default Banner