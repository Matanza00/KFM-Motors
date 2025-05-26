
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-automotive-blue to-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              From Main Street to the Open Road
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Our Kelowna Legacy Since 2009
            </p>
            <p className="text-lg leading-relaxed">
              What started as a small family business on Main Street has grown into Kelowna's 
              most trusted automotive partner, serving thousands of customers across the Okanagan Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-automotive-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 by the Jabbar family, K F M Motors LTD began with a simple mission: 
                  to make quality vehicles accessible to every member of our community. What started 
                  with just five used cars has evolved into a comprehensive automotive service center.
                </p>
                <p>
                  Today, we're proud to offer car rentals, financing solutions, leasing options, 
                  and fleet services to individuals, families, and businesses throughout the 
                  Okanagan Valley. Our growth reflects our commitment to putting customers first 
                  and building lasting relationships.
                </p>
                <p>
                  From weekend warriors seeking rental cars for ski trips to families financing 
                  their first vehicle, we've been there for every milestone. Our team understands 
                  that a car isn't just transportation, it's freedom, opportunity, and connection.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="K F M Motors showroom" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-automotive-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-automotive-charcoal mb-12">
            Our Values Drive Everything We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-automotive-charcoal mb-4">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe honest communication builds trust 
                  and creates customers for life.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-automotive-charcoal mb-4">Speed</h3>
                <p className="text-gray-600">
                  We respect your time. From 5-minute financing approvals to same-day rentals, 
                  we get you back on the road fast.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-automotive-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold text-automotive-charcoal mb-4">Community</h3>
                <p className="text-gray-600">
                  We're proud Kelowna locals who understand our community's unique needs, 
                  from wine tours to mountain adventures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-automotive-charcoal mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-automotive-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-automotive-charcoal mb-2">Abdul Jabbar</h3>
              <p className="text-automotive-blue font-medium mb-2">Founder & General Manager</p>
              <p className="text-gray-600 text-sm">
                15+ years in automotive sales and financing. Passionate about connecting 
                customers with their perfect vehicle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-automotive-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-automotive-charcoal mb-2">Sofia Jabbar</h3>
              <p className="text-automotive-blue font-medium mb-2">Finance Manager</p>
              <p className="text-gray-600 text-sm">
                Specializes in finding financing solutions for all credit situations. 
                Your advocate in the approval process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-automotive-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-automotive-charcoal mb-2">Ahmed Jabbar</h3>
              <p className="text-automotive-blue font-medium mb-2">Service Manager</p>
              <p className="text-gray-600 text-sm">
                Certified mechanic ensuring every vehicle meets our 100-point quality standards. 
                Your peace of mind is his priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Giving Back to Our Community
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed mb-8 text-gray-300">
              We believe in supporting the community that has supported us. K F M Motors proudly 
              sponsors local youth sports teams, participates in charity drives, and provides 
              transportation support for community events.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="text-4xl mb-4 block">🏒</span>
                <h3 className="font-bold mb-2">Youth Hockey Sponsor</h3>
                <p className="text-sm text-gray-400">Supporting the next generation of champions</p>
              </div>
              <div>
                <span className="text-4xl mb-4 block">🎄</span>
                <h3 className="font-bold mb-2">Holiday Toy Drive</h3>
                <p className="text-sm text-gray-400">Bringing joy to families in need</p>
              </div>
              <div>
                <span className="text-4xl mb-4 block">🚗</span>
                <h3 className="font-bold mb-2">Senior Transportation</h3>
                <p className="text-sm text-gray-400">Helping seniors stay connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-automotive-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the K F M Motors Family?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the difference that 15 years of automotive expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/inventory'>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-automotive-blue">
              Visit Our Showroom
            </Button>
            </Link>
            <Link to='/inventory'>
            <Button size="lg" className="bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-charcoal">
              Browse Inventory
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
