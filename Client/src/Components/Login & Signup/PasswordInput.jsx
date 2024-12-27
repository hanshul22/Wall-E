import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

export function PasswordInput({ label, value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="block mb-1 text-sm font-medium text-gray-200">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-12 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute flex items-center justify-center w-5 h-5 -translate-y-1/2 right-3 top-1/2">
          <motion.button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={showPassword ? 'hide' : 'show'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}