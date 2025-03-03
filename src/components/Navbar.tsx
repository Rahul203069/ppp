import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2 text-yellow-400" />
              <span className="font-bold text-xl">Humanity Public School</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Home</Link>
            <Link to="/academics" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Academics</Link>
            <Link to="/admissions" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Admissions</Link>
            <Link to="/faculty" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Faculty</Link>
            <Link to="/student-life" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Student Life</Link>
            <Link to="/infrastructure" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Infrastructure</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Home</Link>
            <Link to="/academics" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Academics</Link>
            <Link to="/admissions" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Admissions</Link>
            <Link to="/faculty" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Faculty</Link>
            <Link to="/student-life" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Student Life</Link>
            <Link to="/infrastructure" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Infrastructure</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-700" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;