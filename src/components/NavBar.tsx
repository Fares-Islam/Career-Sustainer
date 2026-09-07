import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Career Sustainer</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => `text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 ${isActive ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''}`}>Home</NavLink>
            <NavLink to="/jobs" className={({ isActive }) => `text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 ${isActive ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''}`}>Jobs</NavLink>
            <NavLink to="/post-job" className={({ isActive }) => `text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 ${isActive ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''}`}>Post a Job</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 ${isActive ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''}`}>About</NavLink>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};