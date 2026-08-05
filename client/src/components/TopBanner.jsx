import banner from '../assets/TopBanner.jpg';

const TopBanner = ({ text }) => {
  return (
    <div className='relative flex h-[260px] items-center justify-center overflow-hidden' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
      <div className='absolute inset-0 bg-slate-950/60' />
      <div className='relative z-10 text-center'>
        <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300'>TripPartner</p>
        <h1 className='text-4xl font-bold text-white sm:text-5xl'>{text}</h1>
      </div>
    </div>
  );
};

export default TopBanner