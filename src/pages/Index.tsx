
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const mapsUrl = 
  'https://www.google.com/maps/dir/?api=1' +
  '&destination=' + encodeURIComponent('880 Leathead Road, Kelowna, BC V1X2JX');

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Quick Contact CTA */}
      <section className="py-16 bg-automotive-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Drive? Contact Kelowna's Car Pros Today.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get pre-approved in 3 minutes or speak with our automotive experts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-automotive-blue"
            >
              <a href="tel:+6137703569">
                <Phone className="mr-2 inline-block" size={20} />
                Call Now: +613 770 3569
              </a>
            </Button>
            <Button size="lg" className="bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-charcoal">
              Get Pre-Approved Online
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="mx-auto text-automotive-blue mb-4" size={48} />
                <CardTitle>Visit Our Showroom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  880 Leathead Road<br />
                  Kelowna, BC V1X2JX
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white"
                >
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="mx-auto text-automotive-blue mb-4" size={48} />
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 space-y-2 mb-4">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 11:00 AM - 4:00 PM</p>
                </div>
                <p className="text-sm text-automotive-blue font-medium">
                  Emergency assistance available 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="mx-auto text-automotive-blue mb-4" size={48} />
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 space-y-2 mb-4">
                  <p>Phone: +613 770 3569</p>
                  <p>Email: info@kfmmotors.com</p>
                </div>
                <Link to="/contact">
                  <Button asChild className="bg-automotive-blue hover:bg-automotive-blue/90">
                    <a>Start Your Application</a>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
