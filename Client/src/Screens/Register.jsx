import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AuthLayout, Input, PasswordInput } from '../Components/Index';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ email, password, username });
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={setUsername}
          placeholder="Choose a username"
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
        />
        <PasswordInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Choose a password"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          type="submit"
        >
          Sign Up
        </motion.button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-400">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}