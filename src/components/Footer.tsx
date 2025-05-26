
import { Mail, MapPin, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-automotive-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/4ee02c76-5c47-4027-a3d5-897205c9c715.png" 
                alt="K F M Motors LTD Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-automotive-silver mb-4 max-w-md font-poppins">
              Elevating every drive with trusted car rental, financing, and leasing solutions. 
              Serving Kelowna and the Okanagan Valley with excellence since day one.
            </p>
            <div className="space-y-2 text-sm font-poppins">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-automotive-gold mr-2" />
              <span>880 Leathead Road, Kelowna, BC V1X 2JX</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-automotive-gold mr-2" />
              <a href="tel:+254722666581" className="hover:text-automotive-blue transition-colors">
                +613 770 3569
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-automotive-gold mr-2" />
              <a href="mailto:info@kfmmotors.com" className="hover:text-automotive-blue transition-colors">
                info@kfmmotors.com
              </a>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 text-automotive-gold mr-2" />
              <span className="text-automotive-white font-medium">Owner: Abdul Jabbar</span>
            </div>
          </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-montserrat">Quick Links</h4>
            <ul className="space-y-2 text-sm text-automotive-silver font-poppins">
              <li><Link to="/services/rental" className="hover:text-white transition-colors">Car Rental</Link></li>
              <li><Link to="/services/financing" className="hover:text-white transition-colors">Auto Financing</Link></li>
              <li><Link to="/services/leasing" className="hover:text-white transition-colors">Vehicle Leasing</Link></li>
              <li><Link to="/services/fleet" className="hover:text-white transition-colors">Fleet Services</Link></li>
              <li><Link to="/inventory" className="hover:text-white transition-colors">View Inventory</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4 font-montserrat">Business Hours</h4>
            <ul className="space-y-2 text-sm text-automotive-silver font-poppins">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 11:00 AM - 4:00 PM</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-automotive-silver font-poppins">
                Emergency roadside assistance available 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-automotive-silver/20 mt-8 pt-8 text-center">
          <p className="text-sm text-automotive-silver font-poppins">
            © 2024 K F M Motors LTD. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
