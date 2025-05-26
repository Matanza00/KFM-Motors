
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const mapsUrl = 
  'https://www.google.com/maps/dir/?api=1' +
  '&destination=' + encodeURIComponent('880 Leathead Road, Kelowna, BC V1X2JX');

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ visible: false, message: '', type: 'success' });

  // helper to show & auto-hide toast
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
  };

  useEffect(() => {
    // Initialize EmailJS with *your* User ID
    emailjs.init('FONpZ7dCSmHo5ifXW');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_rb9pjm7',    // ← your Service ID
        'template_po9f96d',   // ← your Template ID
        formRef.current       // ← the <form> ref
      )
      .then(() => {
        showToast('Message sent! We’ll be in touch within 24h.', 'success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('❌ Could not send message. Please try again later.');
      });
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
            <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-automotive-charcoal mb-8">Get in Touch</h2>
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="user_name"
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
                      name="phone"
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
                    name="user_email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* hidden field to pass service selection */}
                <input type="hidden" name="service" value={formData.service} />

                <div>
                  <Label htmlFor="service">Interested In</Label>
                  <Select
                    onValueChange={(value) => handleInputChange('service', value)}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Car Rental">Car Rental</SelectItem>
                      <SelectItem value="Auto Financing">Auto Financing</SelectItem>
                      <SelectItem value="Vehicle Leasing">Vehicle Leasing</SelectItem>
                      <SelectItem value="Fleet Services">Fleet Services</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-automotive-blue hover:bg-automotive-blue/90"
                >
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
                            <a href="tel:+6137703569" className="text-automotive-blue hover:underline">
                              +613 770 3569
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
          <h2 className="text-3xl font-bold text-center text-automotive-charcoal mb-8">
            Find Us
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="K F M Motors Location"
              className="w-full h-96 border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=880%20Leathead%20Road%2C%20Kelowna%2C%20BC%20V1X2JX&output=embed"
              allowFullScreen
            />
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
          <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-automotive-blue"
            >
              <a href="tel:+6137703569">
                <Phone className="mr-2 inline-block" size={20} />
                Emergency Hotline: +613 770 3569
              </a>
          </Button>
        </div>
      </section>

      {/* Toast */}
      {toast.visible && (
        <div
          className={`
            fixed bottom-6 right-6 flex items-center space-x-3 px-4 py-2 rounded-lg shadow-lg
            ${toast.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'}
          `}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
