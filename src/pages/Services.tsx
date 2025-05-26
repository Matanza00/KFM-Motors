
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, CreditCard, Calendar, Users, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'rental',
      icon: Car,
      image: '/lovable-uploads/Car-Rental.png',
      title: 'Car Rental',
      hook: 'Weekend escapes? Done.',
      description: 'From daily adventures to extended trips, our diverse fleet has you covered.',
      features: [
        'Daily rates starting from $49',
        'Weekly discounts available',
        'Free pickup and delivery in Kelowna',
        '100-point safety inspection',
        'Full insurance options',
        '24/7 roadside assistance'
      ],
      benefits: [
        'No hidden fees or surprise charges',
        'Wide selection of economy to luxury vehicles',
        'Flexible booking and cancellation',
        'Same-day availability'
      ]
    },
    {
      id: 'financing',
      icon: CreditCard,
      image: '/lovable-uploads/Auto-Finance.png',
      title: 'Auto Financing',
      hook: 'Credit challenged? No problem.',
      description: 'Get behind the wheel today with flexible financing options that work for you.',
      features: [
        'Competitive rates from 3.9% APR',
        '0% down payment options',
        'Same-day approval process',
        'All credit levels welcome',
        'Trade-in evaluations',
        'Extended warranty options'
      ],
      benefits: [
        'Work with all credit situations',
        'Transparent pricing with no surprises',
        'Multiple lender network',
        'Quick approval process'
      ]
    },
    {
      id: 'leasing',
      icon: Calendar,
      image: '/lovable-uploads/Vehicle-Lease.png',
      title: 'Vehicle Leasing',
      hook: 'Drive newer. Pay less.',
      description: 'Experience the latest models with affordable monthly payments.',
      features: [
        'Latest model year vehicles',
        'Payments starting from $299/month',
        'Manufacturer warranty included',
        'Gap insurance available',
        'Maintenance packages',
        'Early upgrade options'
      ],
      benefits: [
        'Lower monthly payments than financing',
        'Drive newer vehicles with latest features',
        'Worry-free warranty coverage',
        'Flexible end-of-lease options'
      ]
    },
    {
      id: 'fleet',
      icon: Users,
      image: '/lovable-uploads/Fleet-b2b.png',
      title: 'Fleet & B2B Services',
      hook: 'Corporate fleet experts.',
      description: 'Streamline your business operations with comprehensive fleet solutions.',
      features: [
        'Volume pricing discounts',
        'Dedicated account management',
        'Fleet maintenance coordination',
        '24/7 emergency support',
        'Custom leasing terms',
        'Online fleet management portal'
      ],
      benefits: [
        'Reduce operational costs',
        'Predictable monthly expenses',
        'Professional account support',
        'Streamlined administration'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-automotive-blue to-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Automotive Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              From rentals to financing, we've got your journey covered.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you need a car for the weekend or want to drive your dream vehicle home today, 
              our comprehensive services make it happen with Kelowna's best rates and service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-automotive-blue" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal">{service.title}</h2>
                      <p className="text-automotive-blue font-semibold text-lg">{service.hook}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-automotive-charcoal mb-3">Features & Options</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-automotive-blue mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-automotive-charcoal mb-3">Why Choose Us</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-automotive-blue mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-automotive-blue hover:bg-automotive-blue/90">
                        Learn More
                      </Button>
                    <Link to='/contact'>
                    <Button variant="outline" className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white">
                      Get Quote
                    </Button>
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden shadow-xl">
                    <div className="h-80 bg-gradient-to-br from-automotive-blue/10 to-automotive-charcoal/10 flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-fit"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose K F M Motors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-automotive-charcoal mb-12">
            Why Kelowna Chooses K F M Motors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <CardTitle className="text-lg">15+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Serving the Okanagan Valley with trusted automotive expertise since 2009.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <CardTitle className="text-lg">Best Rates Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Competitive pricing on all services with transparent, no-surprise billing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <CardTitle className="text-lg">Fast Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Get approved in minutes, not days. Same-day service when you need it.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-lg">Local Ownership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Family-owned business committed to serving our Kelowna community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-automotive-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our automotive experts today and discover why Kelowna trusts K F M Motors.
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
            <Link to='/contact'>
              <Button size="lg" className="bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-charcoal">
                Get Quote Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
