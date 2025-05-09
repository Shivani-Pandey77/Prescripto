import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Login</h2>
            <p className="text-gray-600 mb-4">Please login to book appointment</p>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={() => setIsLogin(false)}
                >
                  Create an account
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-semibold text-gray-700 mb-2">Create Account</h2>
            <p className="text-gray-600 mb-4">Please sign up to book appointment</p>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create account
                </button>
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={() => setIsLogin(true)}
                >
                  Already have an account? Login here
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
