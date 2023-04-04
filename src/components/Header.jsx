import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon,} from '@heroicons/react/24/solid'
  

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-blue-300 px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
            {/* logo section */}
            <Link to='/' className='inline-flex items-center'>
               <BookOpenIcon className='h-10 w-18 text-purple-500'></BookOpenIcon>
               <div className=' italic ml-2 text-2xl font-bold tracking-wide'>
                 <h1>Book<span>Fair</span></h1> 
               </div> 
            </Link>

            {/* nav items section */}
            <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              title='Home page'
              className={({ isActive }) => (isActive ? 'text-purple-600' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/books'
              title='Books page'
              className={({ isActive }) => (isActive ? 'text-purple-600' : '')}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              title='About page'
              className={({ isActive }) => (isActive ? 'text-purple-600' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              title='Contact us Page'
              className={({ isActive }) => (isActive ? 'text-purple-600' : '')}
            >
              Contact Us
            </NavLink>
          </li>
        </ul> 
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-7 text-purple-900' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BookOpenIcon className='h-6 w-6 text-purple-600' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 italic'>
                        BookFare
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-purple-950 hover:bg-purple-600 rounded' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='font-medium hover:text-purple-500'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide transition-colors duration-200 hover:text-purple-500'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide transition-colors duration-200 hover:text-purple-500'
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='font-medium tracking-wide transition-colors duration-200 hover:text-purple-500'
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
        </div>
    );
};

export default Header;