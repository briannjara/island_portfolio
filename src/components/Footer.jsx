import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between px-6 py-4'>
        <p className='text-sm text-center sm:text-left'>
          © 2025 <strong><a href="https://github.com/briannjara" target="_blank" className='blue-gradient_text'>Brian Njaramba</a></strong>. All rights reserved.
        </p>

        <div className='flex gap-3 items-center mb-16 sm:mb-0'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-8 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;