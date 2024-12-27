import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export function AuthLayout({ children, title }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl">
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Lock className="w-12 h-12 text-blue-500" />
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-8 text-3xl font-bold text-center text-gray-100"
          >
            {title}
          </motion.h2>
          {children}
        </div>
      </motion.div>
    </div>
  );
}