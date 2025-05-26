
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4ee02c76-5c47-4027-a3d5-897205c9c715.png" 
              alt="K F M Motors LTD Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium font-poppins transition-colors hover:text-automotive-blue ${
                  isActive(item.href) 
                    ? 'text-automotive-blue border-b-2 border-automotive-blue' 
                    : 'text-automotive-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+6137703569" 
              className="text-automotive-blue font-semibold font-poppins hover:text-automotive-blue/80 transition-colors"
            >
              +613 770 3569
            </a>
            <Button className="bg-automotive-blue hover:bg-automotive-blue/90 font-poppins">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium font-poppins transition-colors hover:text-automotive-blue ${
                    isActive(item.href) ? 'text-automotive-blue' : 'text-automotive-charcoal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a 
                  href="tel:+6137703569" 
                  className="block text-automotive-blue font-semibold font-poppins mb-3"
                >
                  +613 770 3569
                </a>
                <Button className="w-full bg-automotive-blue hover:bg-automotive-blue/90 font-poppins">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
