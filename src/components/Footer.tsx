
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-automotive-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-automotive-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">K F M Motors LTD</h3>
                <p className="text-automotive-silver text-sm">Kelowna's Premier Automotive Partner</p>
              </div>
            </div>
            <p className="text-automotive-silver mb-4 max-w-md">
              Elevating every drive with trusted car rental, financing, and leasing solutions. 
              Serving Kelowna and the Okanagan Valley with excellence since day one.
            </p>
            <div className="space-y-2 text-sm">
              <p>📍 880 Leathead Road, Kelowna, BC V1X 2JX</p>
              <p>📞 <a href="tel:+254722666581" className="hover:text-automotive-blue transition-colors">+254 722 666 581</a></p>
              <p>✉️ <a href="mailto:info@kfmmotors.com" className="hover:text-automotive-blue transition-colors">info@kfmmotors.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-automotive-silver">
              <li><Link to="/services/rental" className="hover:text-white transition-colors">Car Rental</Link></li>
              <li><Link to="/services/financing" className="hover:text-white transition-colors">Auto Financing</Link></li>
              <li><Link to="/services/leasing" className="hover:text-white transition-colors">Vehicle Leasing</Link></li>
              <li><Link to="/services/fleet" className="hover:text-white transition-colors">Fleet Services</Link></li>
              <li><Link to="/inventory" className="hover:text-white transition-colors">View Inventory</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-automotive-silver">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 11:00 AM - 4:00 PM</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-automotive-silver">
                Emergency roadside assistance available 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-automotive-silver/20 mt-8 pt-8 text-center">
          <p className="text-sm text-automotive-silver">
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
