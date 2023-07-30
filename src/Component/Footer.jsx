import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row  md:justify-between ">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2 hover:text-violet-950">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Sed mattis nibh vel velit.Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed mattis nibh vel</p>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0 md:ml-6">
            <h3 className="text-lg font-bold mb-2 hover:text-violet-950">Contact Us</h3>
            <p className="text-gray-400 hover:text-violet-500 ">1234 Main Street</p>
            <p className="text-gray-400 hover:text-violet-500">Anytown, USA 12345</p>
            <p className="text-gray-400 hover:text-violet-500">info@clothingwebsite.com</p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-2 hover:text-violet-950">Follow Us</h3>
            <div className="flex justify-start md:justify-star  ">
              <a href="#" className="text-gray-400 hover:text-white mx-2 "><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white mx-2"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white mx-2"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 hover:text-violet-950">&copy; 2023 Clothing Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;