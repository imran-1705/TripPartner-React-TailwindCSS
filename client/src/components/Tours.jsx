import { useEffect, useState } from 'react';
import TopBanner from './TopBanner';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { getTrips } from '../services/api';

const Tours = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await getTrips();
        setTrips(response.data);
      } catch {
        setError('Unable to load trips right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <>
      <TopBanner text='Tours' />
      <div className='mx-auto my-12 max-w-7xl px-4 md:px-6'>
        <div className='mb-10 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500'>Popular trips</p>
          <h1 className='mb-4 text-3xl font-bold text-slate-900 sm:text-4xl'>Explore top destinations with style.</h1>
          <p className='mx-auto max-w-2xl text-slate-600'>Choose from scenic escapes and immersive city tours designed for comfort and unforgettable moments.</p>
        </div>

        {loading ? (
          <p className='text-center text-slate-600'>Loading trips...</p>
        ) : error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : (
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {trips.map((destination) => (
              <div key={destination.id} className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl'>
                <img src={destination.image} alt={destination.title} className='h-56 w-full object-cover' />
                <div className='p-6'>
                  <div className='mb-2 flex items-center gap-1 text-sm text-slate-500'><Clock size={15} /> {destination.duration}</div>
                  <h3 className='mb-2 text-2xl font-semibold text-slate-900'>{destination.title}</h3>
                  <div className='mb-4 flex items-center gap-2 text-sm text-slate-600'><Star size={16} className='fill-amber-400 text-amber-400' /> {destination.rating} • {destination.location}</div>
                  <p className='mb-5 text-slate-600'>Experience the beauty, food, and culture of {destination.location} in a tailored getaway.</p>
                  <div className='flex items-center justify-between'>
                    <button className='rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white'>₹{destination.price.toLocaleString('en-IN')}</button>
                    <button className='flex items-center gap-1 text-sm font-semibold text-slate-700'>Learn More <ArrowRight size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Tours