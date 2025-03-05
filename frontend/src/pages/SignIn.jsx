import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import NavBar from '../components/Navbar';
import Layout from './Layout';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);

    // Redirect to the dashboard after successful sign-in
    // navigate('/dashboard'); // Redirect to the dashboard page
    navigate('/admin-dashboard'); // Redirect to the dashboard page
  };

  return (
    <Layout>
      <div className="w-full pt-5">
        {/* Sign In Form Section */}
        <section className="px-4 py-16 mx-auto">
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-800/30">
            <h1 className="text-4xl font-bold text-white mb-2 text-center">Welcome Back</h1>
            <p className="text-emerald-200 text-center mb-10">Sign in to access your WhatsBulk dashboard</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-200 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                  className="w-full bg-white/10 border border-emerald-700/30 rounded-lg px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-emerald-200">Password</label>
                  <Link to="/forgot-password" className="text-sm text-emerald-400 hover:text-emerald-300">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                  className="w-full bg-white/10 border border-emerald-700/30 rounded-lg px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="Enter your password"
                />
              </div>
              
              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-5 w-5 bg-white/10 border-emerald-700/30 rounded focus:ring-emerald-500 text-emerald-600"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-emerald-200">
                    Remember me
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-4 rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-emerald-500/25 transform hover:scale-101 transition-transform"
              >
                <span className='text-emerald-900'> Sign In</span>
              </button>
            </form>
            
            {/* Social Sign In Options */}
            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-emerald-800/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-emerald-950/80 text-emerald-200">Or sign in with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="w-full inline-flex justify-center py-3 px-4 border border-emerald-800/30 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 border border-emerald-800/30 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.645 15.721h2.252l.352 2.252h-2.252l-.352-2.252z" fill="#F0502F"/>
                    <path d="M0 11.518c0-1.193.096-2.372.293-3.35.19-.974.633-1.905 1.324-2.793.692-.889 1.699-1.526 3.029-1.915C6.01 3.057 7.577 2.86 9.59 2.86c1.73 0 3.218.318 4.465.954 1.25.636 2.171 1.602 2.76 2.895l-2.96 1.869c-.28-.71-.74-1.286-1.381-1.736-.641-.447-1.478-.674-2.513-.674-1.193 0-2.16.131-2.896.392-.74.263-1.324.602-1.757 1.02-.433.418-.728.889-.885 1.414-.16.524-.239 1.063-.239 1.617 0 1.13.244 2.082.73 2.866.483.784 1.12 1.361 1.907 1.739.785.38 1.651.664 2.593.848.944.187 1.875.335 2.798.446.923.113 1.778.249 2.561.408.784.162 1.433.394 1.952.694v-1.544c0-.995-.162-1.9-.486-2.713-.323-.813-.786-1.512-1.386-2.096-.601-.587-1.324-1.03-2.171-1.355-.848-.32-1.8-.484-2.849-.484-.815 0-1.573.122-2.275.363-.702.242-1.314.573-1.836.997-.522.425-.938.928-1.251 1.511-.314.584-.506 1.21-.576 1.885l-3.24-.635h.02V11.5l.001.018z" fill="#00AEEF"/>
                    <path d="M22.604 7.876a4.1 4.1 0 0 1-1.783 1.655c-.766.392-1.602.592-2.512.592-.911 0-1.746-.2-2.512-.592a4.1 4.1 0 0 1-1.782-1.655c-.433-.71-.649-1.526-.649-2.45 0-.923.216-1.743.649-2.454A4.1 4.1 0 0 1 15.797.318C16.562.106 17.398 0 18.309 0c.91 0 1.746.106 2.512.318a4.1 4.1 0 0 1 1.783 1.655c.433.71.649 1.53.649 2.454 0 .923-.216 1.74-.649 2.45zM14.06 24h4.242L24 8.518h-4.242L14.06 24z" fill="#002A42"/>
                  </svg>
                  Microsoft
                </button>
              </div>
            </div>
            
            {/* Sign Up Link */}
            <div className="text-center mt-10">
              <p className="text-emerald-200">
                Don't have an account? <Link to="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium">Sign up</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      
      </Layout>
  );
};

export default SignIn;