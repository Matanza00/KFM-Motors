
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-automotive-charcoal via-automotive-blue to-automotive-charcoal">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Placeholder for 4K vehicle hero image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7')] bg-cover bg-center opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-montserrat">
            Elevate Every Drive
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-gray-200 font-poppins">
            Discover Kelowna's Best Rates on
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-automotive-gold font-montserrat">
            Rentals, Leases & Financing
          </p>
        </div>

        <div className="animate-slide-in-left">
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto font-poppins">
            No surprises. Just the perfect car and plan, delivered in minutes. 
            Kelowna's trusted automotive partner since day one.
          </p>
        </div>

        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to= '/inventory'>
          <Button size="lg" className="bg-automotive-blue hover:bg-automotive-blue/90 text-lg px-8 py-4 font-poppins">
            Browse Inventory
          </Button>
          </Link>
          <Link to= '/contact'>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-automotive-charcoal text-lg px-8 py-4 font-poppins">
            Get Pre-Approved
          </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-2xl font-bold text-automotive-gold font-montserrat">$49/day</p>
            <p className="text-sm text-gray-300 font-poppins">Rental Starting From</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-2xl font-bold text-automotive-gold font-montserrat">5 Minutes</p>
            <p className="text-sm text-gray-300 font-poppins">Finance Approval</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-2xl font-bold text-automotive-gold font-montserrat">$299/mo</p>
            <p className="text-sm text-gray-300 font-poppins">Leases Starting From</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
