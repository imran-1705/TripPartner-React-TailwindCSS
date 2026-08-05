import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import contactImg from '../assets/ContactImg.jpg';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Unable to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='mx-auto flex max-w-7xl flex-col items-center px-4 py-16 md:flex-row md:px-6 lg:min-h-[80vh]'>
      <Toaster position='top-right' />
      <div className='flex-1 overflow-hidden rounded-3xl bg-slate-100'>
        <img src={contactImg} alt='Contact us' className='h-full w-full object-cover' />
      </div>

      <div className='flex-1 w-full rounded-3xl bg-white p-8 shadow-xl'>
        <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500'>Get in touch</p>
        <h2 className='mb-6 text-3xl font-bold text-slate-900'>Plan your next unforgettable trip.</h2>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='mb-2 block text-sm font-medium text-slate-700'>Name</label>
            <input id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' className='w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500' required />
          </div>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-slate-700'>Email</label>
            <input id='email' name='email' type='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500' required />
          </div>
          <div>
            <label htmlFor='message' className='mb-2 block text-sm font-medium text-slate-700'>Message</label>
            <textarea id='message' name='message' rows='5' value={formData.message} onChange={handleChange} placeholder='Tell us about your dream trip' className='w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500' required />
          </div>
          <button type='submit' disabled={loading} className='w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact