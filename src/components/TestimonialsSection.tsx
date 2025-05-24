
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "West Kelowna",
      text: "K F M Motors made financing my first car incredibly easy. The team was patient, transparent about all costs, and I drove away the same day!",
      rating: 5,
      service: "Auto Financing"
    },
    {
      name: "David Chen",
      location: "Peachland",
      text: "Needed a rental for a week-long family vacation. The car was spotless, rates were competitive, and pickup was right at my hotel. Will definitely use again!",
      rating: 5,
      service: "Car Rental"
    },
    {
      name: "Jennifer Torres",
      location: "Penticton",
      text: "Our company fleet lease with K F M has been fantastic. They handle everything - maintenance, insurance coordination, and always have backup vehicles ready.",
      rating: 5,
      service: "Fleet Services"
    },
    {
      name: "Mark Robertson",
      location: "Vernon",
      text: "Leased my dream BMW through K F M Motors. The monthly payments fit my budget perfectly, and the process was straightforward. Highly recommend!",
      rating: 5,
      service: "Vehicle Leasing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-automotive-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Stories from Real Customers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See why hundreds of Okanagan Valley residents choose K F M Motors for their automotive needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-automotive-blue/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-automotive-gold text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-automotive-silver">{testimonials[currentTestimonial].location}</p>
                <p className="text-automotive-blue font-medium">{testimonials[currentTestimonial].service}</p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-automotive-blue' : 'bg-white/30'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-automotive-gold mb-2">500+</p>
            <p className="text-automotive-silver">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-automotive-gold mb-2">15+</p>
            <p className="text-automotive-silver">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-automotive-gold mb-2">200+</p>
            <p className="text-automotive-silver">Vehicles Available</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-automotive-gold mb-2">24/7</p>
            <p className="text-automotive-silver">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
