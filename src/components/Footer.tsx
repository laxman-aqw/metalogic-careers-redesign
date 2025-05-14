import React from "react";
import logo  from "../assets/metalogo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 xl:grid-cols-4">

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="MetaLogic Logo" className="w-12" />
            <div>
              <h2 className="text-xl font-bold tracking-wide">MetaLogic</h2>
              <p className="text-sm text-gray-400">Software Private Limited</p>
            </div>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-6 8-11a8 8 0 10-16 0c0 5 8 11 8 11z" />
                <circle cx="12" cy="10" r="2.5" fill="currentColor" />
              </svg>
              Saptakhel, Lalitpur
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5C3.5 14.5 9.5 20.5 18.5 22a1.5 1.5 0 001.5-1.5v-3.25a1.5 1.5 0 00-1.23-1.48l-4.26-.71a1.5 1.5 0 00-1.49.45l-2 2a16.48 16.48 0 01-7-7l2-2a1.5 1.5 0 00.45-1.49l-.71-4.26A1.5 1.5 0 005.25 2H2.75A.75.75 0 002 2.75v2.75z" />
              </svg>
              +977 9851353599
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6M3 6v12h18V6M3 18l9-6 9 6" />
              </svg>
              info@metalogic.com.np
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/contact" className="hover:text-primary">Feedback</a></li>
              <li><a href="/contact/partner" className="hover:text-primary">Partnership</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-primary">Join</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/careers" className="hover:text-primary">Careers</a></li>
              <li><a href="/career" className="hover:text-primary">Internships</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-primary">Services</h3>
          <ul className="grid grid-cols-1 gap-1 text-sm">
            <li><a href="/services/software-development" className="hover:text-primary">Custom Software</a></li>
            <li><a href="/services/web-development" className="hover:text-primary">Web Development</a></li>
            <li><a href="/services/mobile-app" className="hover:text-primary">Mobile App</a></li>
            <li><a href="/services/cloud-computing" className="hover:text-primary">Cloud Services</a></li>
            <li><a href="/services/qa" className="hover:text-primary">QA & Testing</a></li>
            <li><a href="/services/ui-ux" className="hover:text-primary">UI/UX Design</a></li>
            <li><a href="/services/support" className="hover:text-primary">Maintenance</a></li>
            <li><a href="/services/devops" className="hover:text-primary">DevOps</a></li>
            <li><a href="/services/blockchain" className="hover:text-primary">Blockchain</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-primary">Follow Us</h3>
          <div className="flex gap-4">

             <a href="https://wa.me/9851353599" target="_blank" aria-label="WhatsApp" className="hover:text-green-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.2 282.2 32 222.2 32 100.3 32 0 132.3 0 254.2c0 44.7 11.7 88.1 34 126.5L0 480l102.3-33.6c36.2 19.9 77 30.4 119.9 30.4 121.9 0 222.2-100.3 222.2-222.2 0-59.9-23.3-116.7-65.2-158.5zM222.2 426.6c-36.3 0-71.8-9.8-102.8-28.3l-7.3-4.3-60.7 19.9 20.1-59.1-4.8-7.8c-21.1-34.4-32.2-73.9-32.2-114.7C34.5 150 122.3 62.2 222.2 62.2c50.7 0 98.4 19.7 134.3 55.6 35.9 35.9 55.6 83.6 55.6 134.3 0 99.9-87.8 187.7-190 187.7zm101.6-138.6c-5.6-2.8-33-16.2-38.1-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18-17.7 21.7-3.2 3.7-6.5 4.2-12.1 1.4-33.2-16.6-55-29.7-76.9-65.6-5.8-9.9 5.8-9.2 16.6-30.6 1.9-3.7.9-6.9-.5-9.7s-12.5-30-17.1-41.1c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.7 6.9c-5 5.6-19.3 18.9-19.3 46 0 27.1 19.7 53.2 22.4 56.9 2.8 3.7 38.8 59.3 94.1 83.1 13.2 5.6 23.5 8.9 31.5 11.4 13.2 4.2 25.1 3.6 34.6 2.2 10.6-1.6 33-13.5 37.7-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.4-5.1-3.7-10.7-6.5z" />
              </svg>
            </a>

            <a href="https://www.facebook.com/metalogicsoftware" target="_blank" aria-label="Facebook" className="hover:text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691V11.03h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.59l-.467 3.676h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0" />
              </svg>
            </a>

  <a href="https://www.instagram.com/metalogicsoftware" target="_blank" aria-label="Instagram" className="hover:text-pink-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146.4-194.1c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.9-19.6-5-37-17.6-53.4-13.5-17.3-31.2-29.1-53.2-29.9-21.1-.9-83.7-1.1-112.7-1.1s-91.6.2-112.7 1.1c-22 .9-39.6 12.6-53.2 29.9-12.6 16.3-16.7 33.8-17.6 53.4-.9 21.1-1.1 83.7-1.1 112.7s.2 91.6 1.1 112.7c.9 19.6 5 37 17.6 53.4 13.5 17.3 31.2 29.1 53.2 29.9 21.1.9 83.7 1.1 112.7 1.1s91.6-.2 112.7-1.1c22-.9 39.6-12.6 53.2-29.9 12.6-16.3 16.7-33.8 17.6-53.4.9-21.1 1.1-83.7 1.1-112.7s-.2-91.6-1.1-112.7zM398.8 388c-7.8 19.5-23.1 34.8-42.6 42.6-29.5 11.7-99.5 9-132.2 9s-102.7 2.6-132.2-9c-19.5-7.8-34.8-23.1-42.6-42.6-11.7-29.5-9-99.5-9-132.2s-2.6-102.7 9-132.2c7.8-19.5 23.1-34.8 42.6-42.6 29.5-11.7 99.5-9 132.2-9s102.7-2.6 132.2 9c19.5 7.8 34.8 23.1 42.6 42.6 11.7 29.5 9 99.5 9 132.2s2.6 102.7-9 132.2z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/" target="_blank" aria-label="LinkedIn" className="hover:text-blue-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.3c-.97 0-1.75-.78-1.75-1.75S5.53 5.2 6.5 5.2s1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.71-1.04 2.07-1.3 3.15-1.3 2.2 0 4 1.8 4 4v5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MetaLogic Software Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
