
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, CreditCard, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Car Rental",
      hook: "Weekend escapes? Done.",
      description: "From daily adventures to extended trips, our diverse fleet has you covered. No hidden fees, just reliable wheels when you need them.",
      features: ["Daily & weekly rates", "Free pickup/delivery", "100-point inspection"],
      cta: "Browse Rentals",
      link: "/contact"
    },
    {
      icon: CreditCard,
      title: "Auto Financing",
      hook: "Credit challenged? No problem.",
      description: "Get behind the wheel today with flexible financing options. We work with all credit levels to find your perfect payment plan. View Inventory",
      features: ["Rates from 3.9% APR", "0% down options", "Same-day approval"],
      cta: "Get Pre-Approved",
      link: "/contact"
    },
    {
      icon: Calendar,
      title: "Vehicle Leasing",
      hook: "Drive newer. Pay less.",
      description: "Experience the latest models with affordable monthly payments. Perfect for those who love upgrading to the newest features.",
      features: ["Latest model years", "Lower monthly payments", "Warranty included"],
      cta: "View Lease Deals",
      link: "/contact"
    },
    {
      icon: Users,
      title: "Fleet & B2B",
      hook: "Corporate fleet experts.",
      description: "Streamline your business operations with our comprehensive fleet solutions. Volume discounts and dedicated account management.",
      features: ["Volume pricing", "Fleet management", "24/7 support"],
      cta: "Fleet Solutions",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-automotive-charcoal mb-4">
            Your Complete Automotive Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From rental cars for weekend getaways to financing your dream vehicle, 
            we've got every mile of your journey covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-automotive-blue group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8 text-automotive-blue group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-automotive-charcoal mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-automotive-blue font-semibold text-lg">
                  {service.hook}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-automotive-blue rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full mt-4 bg-automotive-blue hover:bg-automotive-blue/90">
                    {service.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-automotive-charcoal mb-8">Why Kelowna Trusts K F M Motors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-automotive-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-automotive-charcoal mb-2">100-Point Inspection</h4>
              <p className="text-gray-600 text-sm">Every vehicle undergoes rigorous quality checks</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-automotive-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-automotive-charcoal mb-2">0% Down Options</h4>
              <p className="text-gray-600 text-sm">Get driving with minimal upfront costs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-automotive-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-semibold text-automotive-charcoal mb-2">5-Star Service</h4>
              <p className="text-gray-600 text-sm">Exceptional customer care, every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
