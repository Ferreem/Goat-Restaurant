import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function OrderFinish() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleClick = () => {
    alert("Soon I'll finish this site");
  }

  return (
    <div>
      <Navbar/>
      <main className='flex justify-center items-center'
      style={{height: '80vh'}}>
        <form onSubmit={handleSubmit} className='md:w-4/6 lg:w-2/6 w-full  h-auto border-2 p-8 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Details</h2>
          <div className='mb-4'>
            <label htmlFor="name" className='block mb-2 font-bold'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg '
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="lastName" className='block mb-2 font-bold'>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg '
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="phone" className='block mb-2 font-bold'>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-2 font-bold'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="location" className='block mb-2 font-bold'>Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <button onClick={handleClick} className='w-full bg-color-primary text-white py-2 px-4 rounded-lg'>
            Register
          </button>
        </form>
      </main>
    </div>
  )
}