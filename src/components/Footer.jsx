import React from 'react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>SAHAL V V</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="https://github.com/sahal2255" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare />
          </a>
          <a href="https://instagram.com/_.sahal_vv" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className='text-gray-400'>
        <p>sahalvv9656@gmail.com</p>
        <p>(+91) 9645228096</p> {/* Replace with your actual phone number */}
      </div>
    </div>
  );
}

export default Footer;
