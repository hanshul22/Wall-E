import { motion } from 'framer-motion';

export function Input({ label, type, value, onChange, placeholder }) {
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
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </motion.div>
  );
}