
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-automotive-blue to-automotive-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Drive?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Contact Kelowna's Car Pros Today
            </p>
            <p className="text-lg leading-relaxed">
              Get pre-approved in 3 minutes, schedule a test drive, or speak with our 
              automotive experts. We're here to make your car dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-automotive-charcoal mb-8">Get in Touch</h2>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(250) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Interested In</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rental">Car Rental</SelectItem>
                          <SelectItem value="financing">Auto Financing</SelectItem>
                          <SelectItem value="leasing">Vehicle Leasing</SelectItem>
                          <SelectItem value="fleet">Fleet Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-automotive-blue hover:bg-automotive-blue/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-automotive-charcoal mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-automotive-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-automotive-charcoal mb-2">Visit Our Showroom</h3>
                          <p className="text-gray-600 mb-2">
                            880 Leathead Road<br />
                            Kelowna, BC V1X 2JX
                          </p>
                          <Button variant="outline" size="sm" className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-automotive-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-automotive-charcoal mb-2">Call Us</h3>
                          <p className="text-gray-600 mb-2">
                            <a href="tel:+254722666581" className="text-automotive-blue hover:underline">
                              +254 722 666 581
                            </a>
                          </p>
                          <p className="text-sm text-gray-500">
                            Available during business hours for immediate assistance
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-automotive-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-automotive-charcoal mb-2">Email Us</h3>
                          <p className="text-gray-600 mb-2">
                            <a href="mailto:info@kfmmotors.com" className="text-automotive-blue hover:underline">
                              info@kfmmotors.com
                            </a>
                          </p>
                          <p className="text-sm text-gray-500">
                            We respond to all inquiries within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-automotive-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-automotive-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-automotive-charcoal mb-2">Business Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 5:00 PM</p>
                            <p>Sunday: 11:00 AM - 4:00 PM</p>
                          </div>
                          <p className="text-sm text-automotive-blue font-medium mt-2">
                            Emergency roadside assistance available 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-automotive-charcoal mb-8">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-automotive-blue mx-auto mb-4" />
                <p className="text-gray-600">
                  Interactive map would be embedded here<br />
                  880 Leathead Road, Kelowna, BC V1X 2JX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-automotive-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Our 24/7 roadside assistance is here when you need it most.
          </p>
          <Button size="lg" className="bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-charcoal">
            <Phone className="mr-2" size={20} />
            Emergency Hotline: +254 722 666 581
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
